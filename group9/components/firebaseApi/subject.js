import firebase from './firebaseInit';

const getSubjects = async () => {
  const uid = firebase.auth().currentUser.uid;
  const data = await firebase.firestore().collection(`subjects/${uid}/listSubjects`).get();
  let ret = [];
  data.forEach((doc) => {
    ret.push(doc.data());
  });
  console.log(ret);
  return ret;
};

const addSubject = async (Subject) => {
  // console.log(Subject);
  const uid = firebase.auth().currentUser.uid;
  var ref = firebase.firestore().collection(`subjects/${uid}/listSubjects`);

  var newSubject = {
    name: Subject.name,
    abbreviation: Subject.abbreviation,
    color: Subject.color,
  };
  try {
    await ref.add(newSubject);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { getSubjects, addSubject };
