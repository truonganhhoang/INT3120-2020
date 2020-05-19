import firebase from 'firebase'; 

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


const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// verify 1 field of object
const checkObject1 = (object, f1) => {
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
const checkObject2 = (object, f1, f2) => {
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
const checkObject3 = (object, f1, f2, f3) => {
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
const checkObject4 = (object, f1, f2, f3, f4) => {
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
const checkObject5 = (object, f1, f2, f3, f4, f5) => {
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

export { 
  loadTopics, 
  random, 
  checkObject1, 
  checkObject2, 
  checkObject3, 
  checkObject4, 
  checkObject5
 }; 