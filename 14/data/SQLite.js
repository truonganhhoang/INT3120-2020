import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("toeic-test.db");

// WORD TABLE

const createTable = (data) => {
  db.transaction(tx => {
    tx.executeSql(
      "create table if not exists Words(picture blob, eng varchar primary key, vie varchar, category varchar, type varchar, favorite boolean, remind boolean, notificationID, pronounce varchar, example text);",
      [], 
      () => {
        data.forEach(item => insertWord(item));
      }
    );
  }, (err)=>{console.log(err)});
}

const insertWord = word => {
  db.transaction(tx => {
    tx.executeSql(
      "insert into Words (picture, eng, vie, category, type, favorite, remind, notificationID, pronounce, example) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
      [word.picture, word.eng, word.vie, word.category, word.type, word.favorite, word.remind, "null", word.pronounce, word.example],
      () => {console.log(`inserted ${word.eng}`);},
      (t, err) => {console.log(err)}
    );
  });
}

const getTaggedWord = (app, tag) => {
  db.transaction(tx => {
    if (tag=='favorite' || tag=='remind'){
      tx.executeSql(`select * from Words where ${tag} = 1`,
      [],
      (_, { rows }) =>
        {app.setState({data: rows._array})}
      );
    }else{
      tx.executeSql("select * from Words where category = ?",
      [tag],
      (_, { rows }) =>
        {app.setState({data: rows._array})}
      );
    }  
  }, (err) => {console.log(err)});
}

const clearAllWords = () => {
  db.transaction(tx => {
    tx.executeSql("drop table Words", [], ()=>{console.log('clear table')});
  }, (err)=> console.log(err));
}

const updateFavoriteOrRemind = (tag, eng, value) => {
  db.transaction(tx => {
    tx.executeSql(`update Words set ${tag} = ? where eng = ?`, [value, eng])
  }, (err)=> {console.log(err)});
}

const checkIfTableWordsExist= () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(`SELECT name FROM sqlite_master WHERE name ='Words' and type='table'`,
      [],
      (_, result) => {
        if (result.rows.length > 0){
          resolve(true);
        }else{
          resolve(false);
        }
      })
    });
  })
}

const setNotificationID = (notificationID, eng) => {
  db.transaction(tx => {
    tx.executeSql(`update Words set notificationID = ? where eng = ?`, [notificationID, eng])
  }, (err)=> {console.log(err)});
}

const getNotificationID = (eng) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(`SELECT notificationID FROM Words WHERE eng = ?`,
      [eng],
      (_, result) => {
        //console.log(res)
        if (result.rows.length > 0){
          resolve(result.rows._array[0].notificationID);
        }else{
          resolve('null');
        }
      })
    });
  })
}

// QUESTION TABLE
const createQuestionTable = (data) => {
  db.transaction(tx => {
    tx.executeSql(
      "create table if not exists Questions(question text,  category varchar,  favorite boolean,  answer1 text, answer2 text, answer3 text, result text, createdAt int);",
      [], 
      () => {
        data.forEach(item => insertQuestion(item));
      }
    );
  }, (err)=>{console.log(err)});
}

const insertQuestion = question => {
  db.transaction(tx => {
    tx.executeSql(
      "insert into Questions (question, category, favorite, answer1, answer2, answer3, result, createdAt) values (?, ?, ?, ?, ?, ?, ?, ?)", 
      [question.question, question.category, question.favorite, question.answer1, question.answer2, question.answer3, question.result, question.createdAt],
      () => {console.log(`inserted ${question.question}`);},
      (t, err) => {console.log(err)}
    );
  });
}

const getQuestion = (app, tag, index) => {
  db.transaction(tx => {
      tx.executeSql("select * from Questions where category = ? limit ?,2",
      [tag,index],
      (_, { rows }) =>
        {app.setState({data: rows._array})}
      );  
  }, (err) => {console.log(err)});
}

const getRecentQuestion = (app) => {
  db.transaction(tx => {
      tx.executeSql("select * from Questions order by createdAt DESC limit 5",
      [],
      (_, { rows }) =>
        {app.setState({data: rows._array})}
      );  
  }, (err) => {console.log(err)});
}

const getFavoriteQuestion = (app,val) => {
  db.transaction(tx => {
      tx.executeSql("select * from Questions where favorite = ?",
      [val],
      (_, { rows }) =>
        {app.setState({data: rows._array})}
      );  
  }, (err) => {console.log(err)});
}

const updateFavoriteQuestion = ( ques, value) => {
  db.transaction(tx => {
    tx.executeSql(`update Questions set favorite = ? where question = ?`, [value, ques])
  }, (err)=> {console.log(err)});
}

const updateTimeQuestion = ( ques, value) => {
  db.transaction(tx => {
    tx.executeSql(`update Questions set createdAt = ? where question = ?`, [value, ques])
  }, (err)=> {console.log(err)});
}

const checkIfTablesQuestionExist= () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(`SELECT name FROM sqlite_master WHERE name ='Questions' and type='table'`,
      [],
      (_, result) => {
        if (result.rows.length > 0){
          resolve(true);
        }else{
          resolve(false);
        }
      })
    });
  })
}

// SETTINGS TABLE
const createSettingsTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      "create table if not exists Settings(updatedTime real, darkmode boolean);",
      [],
      (_) => {
        console.log(`created settings table`)
        _.executeSql(`insert into Settings (updatedTime, darkmode) values (${Date.now()}, 0)`)
      });
  }, (err)=>{console.log(err)});
} 

const updateTime = time => {
  db.transaction(tx => {
    tx.executeSql(`update Settings set updatedTime = ?`, [time])
  }, (err)=> {console.log(err)});
}

const getLatestUpdatedTime = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql("select updatedTime from Settings",
      [],
      (_, { rows }) =>
        {resolve(rows._array[0].updatedTime);}
      );  
    }, (err) => {reject(err)});
  })
}

const getCurrentMode = app => {
  db.transaction(tx => {
    tx.executeSql("select darkmode from Settings",
    [],
    (_, { rows }) => {
      global.darkmode = rows._array[0].darkmode==1? true : false;
      app.setState({loading: false, isEnabledDarkmode: global.darkmode});
    });  
  }, (err) => {reject(err)});
}

const changeMode = (value) => {
  db.transaction(tx => {
    tx.executeSql(`update Settings set darkmode = ?`, [value])
  }, (err)=> {console.log(err)});
}


const checkIfSettingsTableExist = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(`SELECT name FROM sqlite_master WHERE name ='Settings' and type='table'`,
      [],
      (_, result) => {
        if (result.rows.length > 0){
          resolve(true);
        }else{
          resolve(false);
        }
      })
    });
  })
}

const dropUpdateTable = () => {
  db.transaction(tx => {
    tx.executeSql("drop table Settings", [], ()=>{console.log('dropped table Settings')});
  }, (err)=> console.log(err));
}


export default{
  // WORD TABLE
  getNotificationID: getNotificationID,
  setNotificationID: setNotificationID,
  updateFavoriteOrRemind: updateFavoriteOrRemind,
  createTable: createTable,
  insertWord: insertWord,
  clearAllWords: clearAllWords,
  getTaggedWord: getTaggedWord,
  checkIfTableWordsExist: checkIfTableWordsExist,

  // QUESTION TABLE
  createQuestionTable: createQuestionTable,
  insertQuestion: insertQuestion,
  checkIfTablesQuestionExist: checkIfTablesQuestionExist,
  getQuestion: getQuestion,
  getFavoriteQuestion: getFavoriteQuestion,
  updateFavoriteQuestion:updateFavoriteQuestion,
  updateTimeQuestion:updateTimeQuestion,
  getRecentQuestion:getRecentQuestion,

  // SETTING TABLE
  createSettingsTable: createSettingsTable,
  updateTime: updateTime,
  getLatestUpdatedTime: getLatestUpdatedTime,
  checkIfSettingsTableExist: checkIfSettingsTableExist,
  getCurrentMode: getCurrentMode,
  changeMode: changeMode,
  dropUpdateTable: dropUpdateTable,
}
