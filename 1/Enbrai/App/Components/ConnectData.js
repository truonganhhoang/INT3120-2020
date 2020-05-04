import axios from 'axios';
import SQLite from 'react-native-sqlite-storage';
import firebase from 'react-native-firebase';
const requestGET = async id => {
    return await axios({
      method: 'GET',
      url: `https://gre.magoosh.com/api/v2/quiz/1/sections/${id}.json?include=levels,questions`,
      timeout: 15000,
    })
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
        return [];
      });
  };
  const openDB = () => {
    console.log('Database OPENED');
  };
  const errorDB = err => {
    console.log(err);
  };
const connectSQLite = async()=>{
    const openDB = () => {
        console.log('Database OPENED');
      };
      const errorDB = err => {
        console.log(err);
      };
    var db = SQLite.openDatabase(
        {
          name: 'dataResult.db',
          createFromLocation: '~www/Result.db',
          location: 'Library',
        },
        openDB,
        errorDB,
      );
    return db;
}
const pushParts = (userId) =>{
  var db = SQLite.openDatabase(
    {
      name: 'dataResult.db',
      createFromLocation: '~www/Result.db',
      location: 'Library',
    },
    openDB,
    errorDB,
  );
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Part',
      [],
      async (tx, res) => {
        var results = res.rows;
        for (let i = 0; i < results.length; i++) {
          var item = results.item(i);
          firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${item.id}`).set({
            id:item.id,
            name:item.name,
            levelCount:item.levelCount,
            levelCompleteCount:item.levelCompleteCount,
            lock: item.lock
          })
          pushLevels(userId,item.id)
        }
      },
    );
    
  });
}
const pushLevels = (userId,parId) =>{
  var db = SQLite.openDatabase(
    {
      name: 'dataResult.db',
      createFromLocation: '~www/Result.db',
      location: 'Library',
    },
    openDB,
    errorDB,
  );
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Levels where partId = ?',
      [parId],
      async (tx, res) => {
        var results = res.rows;
        for (let i = 0; i < results.length; i++) {
          var item = results.item(i);
          firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${parId}`).child('levels').child(`${item.id}`).set({
            id:item.id,
            parId:item.partId,
            questCount:item.questCount,
            questCompleteCount:item.questCompleteCount,
            lock: item.lock
          })
          pushQuestions(userId,parId,item.id)
        }
      },
    ); 
  })
}
const pushQuestions = (userId,parId,levelId) =>{
  var db = SQLite.openDatabase(
    {
      name: 'dataResult.db',
      createFromLocation: '~www/Result.db',
      location: 'Library',
    },
    openDB,
    errorDB,
  );
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * from Questions WHERE partId = ? AND levelId= ?; ',
      [parId,levelId],
      async (tx, res) => {
        var results = res.rows;
        for (let i = 0; i < results.length; i++) {
          var item = results.item(i);
          firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${parId}`).child('levels').child(`${levelId}`).child('questions').child(`${item.id}`).set({
            id:item.id,
            parId:item.partId,
            levelId:item.levelId,
            isReview:item.isReview,
            isCorrect:item.isCorrect,
          })
        }
      },
    ); 
  })
}
export {requestGET, connectSQLite,pushParts}