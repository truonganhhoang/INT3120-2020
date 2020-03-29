import firebase from './firebaseInit';

const getTasks = () => {
  const uid = firebase.auth().currentUser.uid;
  const data =
    firebase
      .firestore()
      .collection(`tasks/${uid}/listTasks`)
      .get() | [];
  return data;
};

const addTask = (task) => {
  console.log(task);
  const uid = firebase.auth().currentUser.uid;
  var myRef = firebase.firestore().collection(`tasks/${uid}/listTasks`);

  var newData = {
    name: task.name,
    lesson: task.lesson,
    type: task.type,
    date: task.date,
    description: task.description,
  };
  return Promise.resolve().then(() => myRef.doc().set(newData));
};

export { getTasks, addTask };
