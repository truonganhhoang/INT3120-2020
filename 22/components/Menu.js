import * as React from 'react';
import { Button,ScrollView, View,StyleSheet ,Alert,Image,Text} from 'react-native';

import styles from '../assets/css/css';

class Menu extends React.Component {
  render(){
    return (
  <ScrollView style={styles.container}>
    <View style={styles.banner}>
        <Text style={styles.paragraph}>
         3000 Từ Vựng Tiếng Anh
        </Text>
    </View>
    <View style={styles.container2}>
        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/star.png')}/>
          <Button title='Từ Đã Học' color="#ffffff" onPress={() =>Alert.alert('1')}/>
        </View>
        
         <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/list.png')}/>
          <Button title='Danh Sách Từ' color="#ffffff" onPress={() =>Alert.alert('2')}/>
          </View>

         <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/search.png')}/>
          <Button title='Tìm Kiếm' color="#ffffff" onPress={() =>Alert.alert('3')}/>
          </View>
        
         <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/add.png')}/>
          <Button title='Thêm Từ' color="#ffffff" onPress={this._Add}/>
        </View>
        
        <View style={styles.button}>
          <Button title='Hướng dẫn' color="#ffffff" onPress={() =>Alert.alert('6')}/>
        </View>

        <View style={[styles.button,{justifyContent: 'center', backgroundColor:'red'}]}>
          <Button title='Trở về' color="#ffffff" onPress={this._Back} /> 
        </View>
      </View>
    </ScrollView>
  );
  
  }
  _Add= async () => {
    this.props.navigation.navigate('Add');
    }
  _Back= async () =>{
     this.props.navigation.navigate('Home');
  }
}

export default Menu;