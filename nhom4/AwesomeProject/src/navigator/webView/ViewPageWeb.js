

import React,{Component} from 'react';
import WebView from 'react-native-webview';
export default class ViewPageWeb extends Component{
    
    render(){
        return(
            <WebView source={{uri: 'https://www.youtube.com/watch?v=Nc76QsbeC1Q&feature=youtu.be'}}/>
        )
    }
}