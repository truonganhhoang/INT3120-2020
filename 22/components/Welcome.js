import * as React from 'react';
import { Button, View,StyleSheet ,Alert,Image,Text,ScrollView} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import styles from '../assets/css/css';
import Constants from 'expo-constants';
class Welcome extends React.Component{
  render(){
    return (
    <ScrollView style={styles.container}>
    <View style={styles.banner}>
        <Text style={[styles.paragraph,{ flex: 1, flexDirection: 'column' }]}>
         3000 Từ Vựng Tiếng Anh
        </Text>
        <Text style={{ flex: 1, flexDirection: 'column' }}></Text>
    </View>
      <View style={styles.container2}>
        <Image style={styles.logo2} source={require('../assets/img/nyanko.jpg')} />
        <Text style={styles.paragraph2}>
          Không học mỗi ngày là không được đâu đấy
        </Text>  
        <View style={[styles.button2,{padding:5}]}>
          <Text style={styles.text_button} onPress={this._Menu}>Bắt Đầu Học</Text>
        </View>
      </View>
    </ScrollView>
    );
  }
  _Menu= async () => {
    this.props.navigation.navigate('Menu');
  };
}

export default Welcome;