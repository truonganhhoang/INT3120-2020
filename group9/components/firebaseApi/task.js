import firebase from './firebaseInit';

const getTasks = async () => {
  const uid = firebase.auth().currentUser.uid;
  const data = await firebase
    .firestore()
    .collection(`tasks/${uid}/listTasks`)
    .get();
  let ret = [];
  data.forEach((doc) => {
    ret.push(doc.data());
  });
  console.log(ret);
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
    description: task.description,
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
