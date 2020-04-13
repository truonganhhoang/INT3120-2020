import firebase from './firebaseInit';

const getTasks = async () => {
  const uid = firebase.auth().currentUser.uid;
  const data = await firebase.firestore().collection(`tasks/${uid}/listTasks`).get();
  let ret = [];
  try {
  data.forEach((doc) => {
    ret.push(doc.data());
  });
  } catch (err) {
    console.log(err);    
  }
  return ret;
};

const addTask = async (task) => {
  // console.log(task);
  const uid = firebase.auth().currentUser.uid;
  var ref = firebase.firestore().collection(`tasks/${uid}/listTasks`);

  var newTask = {
    name: task.name,
    lesson: task.lesson,
    type: task.type,
    date: task.date,
    day: task.day,
    description: task.description,
    done: task.done,
  };
  try {
    await ref.add(newTask);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { getTasks, addTask };
