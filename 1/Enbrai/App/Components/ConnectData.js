import axios from 'axios';
import SQLite from 'react-native-sqlite-storage';
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
          createFromLocation: '~www/dataResult.db',
          location: 'Library',
        },
        openDB,
        errorDB,
      );
    return db;
}
export {requestGET, connectSQLite}