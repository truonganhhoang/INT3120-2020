import { FirebaseApp } from '../component/FirebaseConfig';
const ReadFirebase=(ref)=>{
    
    let dataObject=FirebaseApp.database().ref(ref).once('value').then(snapshot => {
        return snapshot.val()
    });

    console.log(dataObject);
    return dataObject;
}
export default ReadFirebase;