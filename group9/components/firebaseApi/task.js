import firebase from './firebaseInit';

export function getTasks(uid) {
  const preObject = document.getElementById('task');

  const data = firebase.firestore().collection(`tasks/${uid}`).get() | [];
  console.log(data);
  return data;
}

export function addTask(uid, task) {
  console.log(uid, task);
  var myRef = firebase.firestore().collection(`tasks/${uid}/${task.name}`);

  var newData = {
    name: task.name,
    lesson: task.lesson,
    type: task.type,
    date: task.date,
    description: task.description,
  };

  myRef.add(newData);
}
