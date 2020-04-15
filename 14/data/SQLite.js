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

const checkIfTablesExist= () => {
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

// EXAM TABLE

export default{
  // WORD TABLE
  getNotificationID: getNotificationID,
  setNotificationID: setNotificationID,
  updateFavoriteOrRemind: updateFavoriteOrRemind,
  createTable: createTable,
  insertWord: insertWord,
  clearAllWords: clearAllWords,
  getTaggedWord: getTaggedWord,
  checkIfTablesExist: checkIfTablesExist,

  // EXAM TABLE
}
