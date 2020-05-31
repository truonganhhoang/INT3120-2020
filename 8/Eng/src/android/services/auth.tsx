import firebase from 'firebase'; 
import { AsyncStorage } from 'react-native'; 

var firebaseConfig = { 
  apiKey: "AIzaSyCIPo4i1f8qzNtVLEVVPh34ubCs6pv3UUs",
  authDomain: "english-uet-team.firebaseapp.com",
  databaseURL: "https://english-uet-team.firebaseio.com",
  projectId: "english-uet-team",
  storageBucket: "english-uet-team.appspot.com",
  messagingSenderId: "151102314176",
  appId: "1:151102314176:web:866bcec21e8f77a205bf25",
  measurementId: "G-G550WJ0Q0E"
};

const loadTopics = () => {
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
  }
  const database = firebase.database(); 
  return database.ref('/topics');  
}


const random = (min: any, max: any) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// verify 1 field of object
const checkObject1 = (object: Object, f1: string) => {
  let check = 0; 
  Object.keys(object).forEach((item) => {
    if (item == f1) check++
  })
  console.log('1'); 
  if (check == 1) {
    return true
  } else {
    return false
  }
}

// verify 2 fields of object
const checkObject2 = (object: Object, f1: string, f2: string) => {
  let check = 0; 
  Object.keys(object).forEach((item) => {
    if (item == f1) check++
    else if (item == f2) check++
  })
  console.log('2'); 
  if (check == 2) {
    return true
  } else {
    return false
  }
}

// verify 3 fields of object
const checkObject3 = (object: Object, f1: string, f2: string, f3: string) => {
  let check = 0; 
  Object.keys(object).forEach((item) => {
    if (item == f1) check++
    else if (item == f2) check++
    else if (item == f3) check++ 
  })
  console.log('3'); 
  if (check == 3) {
    return true
  } else {
    return false
  }
}

// verify 4 fields of object
const checkObject4 = (object: Object, f1: string, f2: string, f3: string, f4: string) => {
  let check = 0; 
  Object.keys(object).forEach((item) => {
    if (item == f1) check++
    else if (item == f2) check++
    else if (item == f3) check++ 
    else if (item == f4) check++
  })
  console.log('4'); 
  if (check == 4) {
    return true
  } else {
    return false
  }
}

// verify 5 fields of object
const checkObject5 = (object: Object, f1: string, f2: string, f3: string, f4: string, f5: string) => {
  let check = 0; 
  Object.keys(object).forEach((item) => {
    if (item == f1) check++
    else if (item == f2) check++
    else if (item == f3) check++ 
    else if (item == f4) check++
    else if (item == f5) check++
  })
  console.log('5'); 
  if (check == 5) {
    return true
  } else {
    return false
  }
}

const storeDataToStorage = async (key: string, value: string) => { 
  console.log('Store Data To Storage')
  try {
    await AsyncStorage.setItem(key, value, 
      () => { console.log('save data success.') })
  } catch (error) {
    console.log(error); 
  }
}

const getDataFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key); 
    if (value !== null) {
      console.log(JSON.parse(value)); 
      return JSON.parse(value); 
    } else {
      console.log('Data not found')
      return null
    }
  } catch (error) {
    console.log(error); 
    return null
  }
}

const removeDataFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key, () => { console.log('remove success.') })
  } catch (error) {
    console.log(error)
  }
} 

const mergeItem = async (key: string, value: string) => { 
  try {
    await AsyncStorage.mergeItem(key, value, () => { console.log('merge success') })
  } catch (error) {
    console.log(error)
  }
}

const delFavoriteLesFromStorage = async (lessonName: string) => {
  let lessons = await getDataFromStorage('favoriteLessons');
  delete lessons[lessonName]; 
  storeDataToStorage('favoriteLessons', JSON.stringify(lessons))
  getDataFromStorage('favoriteLessons')
}

const delFavoriteWordFromStorage = async (en_meaning: string, remove: any) => {
  let words = await getDataFromStorage('favoriteWords'); 
  delete words[en_meaning]; 
  storeDataToStorage('favoriteWords', JSON.stringify(words))
  getTobeHandleFromStorage('favoriteWords', remove)
}

const delFavoriteLessonFromStorage = async (wordGroupName: string, remove: any) => {
  let lessons = await getDataFromStorage('favoriteLessons'); 
  delete lessons[wordGroupName]; 
  storeDataToStorage('favoriteLessons', JSON.stringify(lessons)); 
  getTobeHandleFromStorage('favoriteLessons', remove)
}

const getTobeHandleFromStorage = async (key: string, action: any) => {
  try {
    await AsyncStorage.getItem(key, action); 
  } catch (error) {
    console.log(error); 
    return null
  }
}

export { 
  loadTopics, 
  random, 
  checkObject1, 
  checkObject2, 
  checkObject3, 
  checkObject4, 
  checkObject5, 
  getDataFromStorage, 
  storeDataToStorage, 
  removeDataFromStorage, 
  mergeItem, 
  delFavoriteLesFromStorage, 
  delFavoriteWordFromStorage, 
  getTobeHandleFromStorage, 
  delFavoriteLessonFromStorage
}; 