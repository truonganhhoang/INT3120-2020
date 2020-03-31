import * as React from 'react';
import { Button, View,StyleSheet ,Alert,Image,Text} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import styles from '../assets/css/css';
import Constants from 'expo-constants';
class Welcome extends React.Component{
  render(){
    return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.paragraph}>
         3000 Từ Vựng Tiếng Anh
        </Text>
      </View>
      <View style={styles.container2}>
        <Image style={styles.logo2} source={require('../assets/img/nyanko.jpg')} />
        <Text style={styles.paragraph2}>
          Không học mỗi ngày là không được đâu đấy
        </Text>  
        <View style={styles.button2}>
          <Button title="Bắt Đầu Học" color="#ffffff" onPress={this._Menu}/>
        </View>
      </View>
    </View>
    );
  }
  _Menu= async () => {
    this.props.navigation.navigate('Start');
  };
}
export default Welcome;