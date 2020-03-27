import firebase from 'firebase';

export function getTasks () {

  const preObject = document.getElementById('task');
  
  const dbRefObject = firebase.database().ref().child('task');
      
  var tasks ;

  dbRefObject.on('value', snap => tasks = (snap.val()));

  return task;

}

export function addTask(task) {
  var myRef = firebase.database().ref().push();
  var key = myRef.getKey();
  
  var newData = {
      id : key,
      name: task.name,
      lesson: task.lesson,
      type: task.type,
      date: task.date,
      description: task.description,
    };

  myRef.push(newData);
}
