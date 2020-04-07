import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { Button } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import auth from './firebaseApi/auth';

export default class HelloScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    this.props.navigation.navigate('LoginScreen');
  }
  
  signup = () => {
    this.props.navigation.navigate('SignUpScreen');
  }
  
  render() {
    return(
      <View style={styles.container}>
        <LinearGradient
          colors={['#23a6d5','#23d5ab']}
          style={styles.background}
        >
        
        <View style={styles.view}>
          <Image source={require('../image/icon.png')} style={{ width: 100, height: 100 }} />
          <Text style={styles.text}> TIME TABLE </Text>
        </View>
        <View style={styles.button}>
          <Button
            title='LOGIN'  
            titleStyle={{fontWeight:'bold', letterSpacing: 1, color:'#fff', fontSize:18}}
            type='outline'  
            buttonStyle={{ borderRadius: 30, height: 55, borderColor:'#fff'}}
            onPress={()=> this.login()} 
          /> 
        <View style={{marginTop:'7%'}} />
          <Button
            title='SIGN UP'  
            titleStyle={{fontWeight:'bold', letterSpacing: 1, color:'#23a6d5', fontSize:18}}
            buttonStyle={{ borderRadius: 30, height: 55, backgroundColor: '#fff'}}
            onPress={()=> this.signup()}
          />
        <View style={{marginTop:'9%', alignItems:'center', flex: 1,}} />
          <Text 
            onPress={() => auth.signInAnonymously()} 
            style={{fontSize:17, color:'#fff', fontWeight:'bold'}}
          >
            Use Anonymous? Sign In Anonymously</Text>    
        </View>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginTop: '60%',
    alignItems:'center',
    justifyContent:'center',
  },
  text: {
    fontSize: 25,
    margin: 10,
    letterSpacing: 4,
    color: '#fff',
    fontWeight:'bold',
  },
  background: {
    height:'100%'
  },
  button: {
    marginTop:'30%',
    marginLeft:'10%',
    marginRight:'10%',
  }
});
