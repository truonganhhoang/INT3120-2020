import React from 'react'
import { View, Text } from 'react-native'
import SplashScreen from "react-native-splash-screen";

class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        // Handle data
        SplashScreen.hide()
        this.props.navigation.navigate('Home')
    }
    render(){
        return (
            <View style={styles.container}>
               
            </View>
        )
    }
}
const styles = {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
}
export default Splash