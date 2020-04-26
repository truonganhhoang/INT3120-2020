import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, Platform } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import { firebaseApp } from '../../firebaseconfig';
const storage = firebaseApp.storage();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;
const options = {
    title: 'Đổi ảnh đại diện',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const UploadImg = ( uri, mine='img/jpg' )=>{
    return new Promise((resolve, reject )=>{
        const upLoadUri = Platform.OS === "ios" ? uri.replace('file://',''): uri;
        const sessionId = new Data().getTime();
        let upLoadBlob = null;
        const imageRef = storage.ref('avatar').child(`${sessionId}.jpg`); // duong dan thu muc goc co ten avatar noi voi id anh
        fs.readFile(upLoadUri, 'base64')
        .then((data)=>{
            return Blob.build(data, { type: `${mine}; BASE64` })
        })
        .then((blob)=>{
            upLoadBlob = Blob
            return imageRef.put(blob, {contentType: mine}) // up len fire base
        })
        .then(()=>{
            upLoadBlob.close()
            return imageRef.getDownloadURL() // lay file tu firebase ve 
        })
        .then((url)=>{
            resolve(url)
        })
        .catch((error)=>{
            reject(error)
        });
    }
    )
}
export default class UpAvt extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    PickImg(){
        ImagePicker.showImagePicker(options, (response) => {
            this.setState({avatarSource:''})
            if (response.didCancel) {
              
            } else if (response.error) {
              
            } else if (response.customButton) {
             
            } else {
              UploadImg(response.uri)
              .then(url => this.setState({avatarSource: url}))
              .catch(error => console.log(error))
            }
          });
    }
    render() {
        return (
            <TouchableOpacity
            onPress={()=> this.PickImg()}
            >
                <Text style={{fontSize: 32, color: "#0288D1"}}>
                    Upanh
                </Text>
                <Image source={this.state.avatarSource} style={{width:200,height:200}} />
            </TouchableOpacity>
        )
    }
}
