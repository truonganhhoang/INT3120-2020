import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import {storage} from '../firebase/connect'

// export default class upload extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: null,
//       url: '',
//       progress: 0
//     }
//     handleUpload = () => {
//       const { image } = this.state;
//       const uploadTask = storage.ref(`home/${image.name}`).put(image);
//       uploadTask.on('state_changed',
//         (snapshot) => {
//           // progrss function ....
//           const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//           this.setState({ progress });
//         },
//         (error) => {
//           // error function ....
//           console.log(error);
//         },
//         () => {
//           // complete function ....
//           storage.ref('home').child(image.name).getDownloadURL().then(url => {
//             console.log(url);
//             this.setState({ url });
//           })
//         });
//       }
//     }
//     render() {
//       return (
//         <View>
//           <Image source={{uri: this.state.url}} />
//           <Text>Hello ggfd</Text>
//         </View>
//       );
//     }
//   }



export default class upload extends Component {
    uploadPhotoAsync = async uri =>{
    const path = home/$(this.uid)/$(Date.now()).png
    }
      render() {
        return (
          <View>
            <Image source={{uri: this.state.url}} />
            <Text>Hello ggfd</Text>
          </View>
        );
      }
    }