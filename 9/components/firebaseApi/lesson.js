import firebase from './firebaseInit';

const getLessons = async () => {
  const uid = firebase.auth().currentUser.uid;
  const data = await firebase.firestore().collection(`lessons/${uid}/listLessons`).get();
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
  return ret;
};

const getLessonsName = async () => {
  const uid = firebase.auth().currentUser.uid;
  const data = await firebase.firestore().collection(`lessons/${uid}/listLessons`).get();
  let ret = [];
  try {
    data.forEach((doc) => {
      let ret_doc = doc.data();
      ret_doc.fid = doc.id;
      let table = [];
      table.push(ret_doc);
      table.map((item) => {
        let name = item.name;
        if (name == undefined) name = '';
        if (ret.filter((i) => i.value == name).length == 0)
          ret.push({
            label: name,
            value: name,
          });
      });
    });
  } catch (err) {
    console.log(err);
  }
  return ret;
};

const addLesson = async (lesson) => {
  // console.log(lesson);
  const uid = firebase.auth().currentUser.uid;
  const ref = await firebase.firestore().collection(`lessons/${uid}/listLessons`);
  var newLesson = {
    name: lesson.name,
    teacher: lesson.teacher,
    week: lesson.week,
    type: lesson.type,
    location: lesson.location,
    date: lesson.date,
    day: lesson.day,
    start: lesson.start,
    startTime: lesson.startTime,
    end: lesson.end,
    endTime: lesson.endTime,
  };
  try {
    await ref.add(newLesson);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const updateLesson = async (update_data) => {
  const fid = update_data.fid;
  if (!fid) return false;
  const uid = firebase.auth().currentUser.uid;
  var doc_ref = firebase.firestore().doc(`lessons/${uid}/listLessons/${fid}`);
  try {
    await doc_ref.update(update_data);
    // console.log(update_data);
    return true;
  } catch (err) {
    return false;
  }
};

const deleteLesson = async (fid) => {
  if (!fid) return false;
  const uid = firebase.auth().currentUser.uid;
  var doc_ref = firebase.firestore().doc(`lessons/${uid}/listLessons/${fid}`);
  try {
    await doc_ref.delete();
    // console.log(update_data);
    return true;
  } catch (err) {
    return false;
  }
};

const deleteMultiLessons = async (lessons_fid) => {
  let err_fids = [];
  for (fid of lessons_fid) {
    var doc_ref = firebase.firestore().doc(`lessons/${uid}/listLessons/${fid}`);
    try {
      await doc_ref.delete();
    } catch (err) {
      err_fids.push(fid);
    }
  }
  return err_fids;
};

export { getLessons, addLesson, getLessonsName, updateLesson, deleteLesson, deleteMultiLessons };
