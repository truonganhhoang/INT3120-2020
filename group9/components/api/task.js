import firebase from 'firebase';

export function addTask(task, addComplete) {
  firebase.firestore()
  .collection('Tasks')
  .add({
      name: task.name,
      lesson: task.lesson,
      type: task.type,
      date: task.date,
      description: task.description,
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));
}
