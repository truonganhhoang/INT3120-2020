import React,{Component} from 'react';
import {} from 'react-native';
import Video from 'react-native-video';

export default class Practice extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        /*FirebaseApp.database().ref('Catigories').child("B2").once('value').then(snapshot => {
            this.setState({data:snapshot.val()});
        })*/
    }
    
    render(){
        return(
        <Video source={require('../asset/WIN_20200411_20_11_42_Pro.mp4')}
            ref={(ref) => {
                this.player = ref
            }}                                  
            onBuffer={this.onBuffer}
            onEnd={this.onEnd}
            onError={this.videoError}
            style={styles.backgroundVideo} />
        );
    }

}