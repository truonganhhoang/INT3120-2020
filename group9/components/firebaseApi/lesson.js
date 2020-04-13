import firebase from './firebaseInit';

const getLessons = async () => {
  const uid = firebase.auth().currentUser.uid;
  const data = await firebase.firestore().collection(`lessons/${uid}/listLessons`).get();
  let ret = [];
  data.forEach((doc) => {
    ret.push(doc.data());
  });
  return ret;
};

const addLesson = async (lesson) => {
  // console.log(lesson);
  const uid = firebase.auth().currentUser.uid;
  var ref = firebase.firestore().collection(`lessons/${uid}/listLessons`);

  var newLesson = lesson;
  console.log(newLesson);
  try {
    await ref.add(newLesson);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { getLessons, addLesson };
