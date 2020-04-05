import firebase from './firebaseInit';

const getLessons = async () => {
  const uid = firebase.auth().currentUser.uid;
  const data = await firebase.firestore().collection(`lessons/${uid}/listLessons`).get();
  let ret = [];
  data.forEach((doc) => {
    ret.push(doc.data());
  });
  console.log(ret);
  return ret;
};

const addLesson = async (lesson) => {
  // console.log(lesson);
  const uid = firebase.auth().currentUser.uid;
  var ref = firebase.firestore().collection(`lessons/${uid}/listLessons`);

  var newLesson = {
    abbreviation: lesson.abbreviation,
    teacher: lesson.teacher,
    type: lesson.type,
    location: lesson.location,
    day: lesson.day,
    start: lesson.start,
    end: lesson.end,
    color: lesson.color,
  };
  try {
    await ref.add(newLesson);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { getLessons, addLesson };
