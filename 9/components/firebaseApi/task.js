import firebase from './firebaseInit';

const getAllTasks = async () => {
  const uid = firebase.auth().currentUser.uid;
  const data = await firebase.firestore().collection(`tasks/${uid}/listTasks`).get();
  let ret = [];
  try {
    data.forEach((doc) => {
      let ret_doc = doc.data();
      ret_doc.fid = doc.id;
      ret.push(ret_doc);
    });
  } catch (err) {
    console.log(err);
  }
  // console.log(ret);
  return ret;
};

const addTask = async (task) => {
 //  console.log(task);
  const uid = firebase.auth().currentUser.uid;
  var ref = firebase.firestore().collection(`tasks/${uid}/listTasks`);
//  var lesson_ref = firebase.firestore.doc(`lessons/${uid}/listLessons/${task.lesson}`);
  var newTask = {
    name: task.name,
    lesson: task.lesson,
   // lesson: lesson_ref,
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

const updateTask = async (update_data) => {
  const fid = update_data.fid;
  if (!fid) return false;
  const uid = firebase.auth().currentUser.uid;
  var doc_ref = firebase.firestore().doc(`tasks/${uid}/listTasks/${fid}`);
  try {
    await doc_ref.update(update_data);
    // console.log(update_data);
    return true;
  } catch (err) {
    return false;
  }
};

const deleteTask = async (fid) => {
  if (!fid) return false;
  const uid = firebase.auth().currentUser.uid;
  var doc_ref = firebase.firestore().doc(`tasks/${uid}/listTasks/${fid}`);
  try {
    await doc_ref.delete();
    // console.log(update_data);
    return true;
  } catch (err) {
    return false;
  }
};

const deleteMultiTasks = async (tasks_fid) => {
  let err_fids = [];
  for (fid of tasks_fid) {
    var doc_ref = firebase.firestore().doc(`tasks/${uid}/listTasks/${task_fid}`);
    try {
      await doc_ref.delete();
    } catch (err) {
      err_fids.push(fid);
    }
  }
  return err_fids;
};

export { getAllTasks, addTask, updateTask, deleteTask, deleteMultiTasks };
