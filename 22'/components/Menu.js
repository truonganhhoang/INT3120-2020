import * as React from 'react';
import { Button,ScrollView, View,StyleSheet ,Alert,Image,Text} from 'react-native';

import styles from '../assets/css/css';

class Menu extends React.Component {
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
        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/star.png')}/>
          <Text style={styles.text} onPress={this._Tick}>Từ Đã Học</Text>
        </View>
        
         <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/list.png')}/>
          <Text style={styles.text} onPress={this._List}>Danh Sách Từ</Text>
          </View>

         <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/search.png')}/>
          <Text style={styles.text} onPress={this._Search}>Tìm Kiếm</Text>
          </View>
        
         <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/add.png')}/>
          <Text style={styles.text} onPress={this._Add}>Thêm Từ</Text>
        </View>
        
        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/book.png')}/>
          <Text style={styles.text} onPress={this._Tutorial}>Hướng dẫn</Text>
        </View>

        <View style={[styles.button,{justifyContent: 'center', backgroundColor:'red'}]}>
          <Text style={styles.text} onPress={this._Back} >Trở Về</Text>
        </View>
      </View>
    </ScrollView>
  );
  
  }
  _Search= async () => {
    this.props.navigation.navigate('Search');
    }
  _Tick= async () => {
    this.props.navigation.navigate('Tick');
    }
  _Tutorial= async () => {
    this.props.navigation.navigate('Tutorial');
    }
  _List= async () => {
    this.props.navigation.navigate('List');
    }
  _Add= async () => {
    this.props.navigation.navigate('Add');
    }
  _Back= async () =>{
     this.props.navigation.navigate('Welcome');
  }
}

export default Menu;