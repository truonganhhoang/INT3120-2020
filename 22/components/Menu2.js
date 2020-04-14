import * as React from 'react';
import { Button,ScrollView, View,StyleSheet ,Alert,Image,Text,TextInput,FlatList,TouchableOpacity,Linking,SafeAreaView,} from 'react-native';
import Constants from 'expo-constants';

import styles from '../assets/css/css';



class Menu2 extends React.Component {
  Headder=()=>{
    return(
      <View style={styles.banner}>
          <Text style={[styles.paragraph,{ textAlign: 'center',flex: 1, flexDirection: 'column' }]}>
         3000 Từ Vựng Tiếng Anh
          </Text>
          <Text style={{ flex: 1, flexDirection: 'column' }} />
          <View style={{backgroundColor: '#f7f7f7',padding: 10,}}>
            <TextInput
              title="Tra từ"
              placeholder="Tra từ..."
              style={styles.TextInput}
            />
          </View>
      </View>
    );
  }

MenuList=()=>{
    return(
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
          <Image style={styles.icon} source={require('../assets/icon/add.png')}/>
          <Text style={styles.text} onPress={this._Add}>Thêm Từ</Text>
        </View>
        
        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/icon/book.png')}/>
          <Text style={styles.text} onPress={this._Tutorial}>Hướng dẫn</Text>
        </View>

        <View style={[styles.button,{justifyContent: 'center', backgroundColor:'red'}]}>
          <Text style={[styles.text,{color:'#ffffff'}]} onPress={this._Back} >Trở Về</Text>
        </View>
      </View>
    );
  }

  OtherApps=()=>{
    return(
      <View style={styles.container2}>
        <Text style={{fontSize: 20,color:"#00bcd4",}} >Ứng dụng học Tiếng Anh khác</Text>
        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/img/doulingo.png')}/>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.duolingo&hl=vi')}>
            <Text style = {styles.text}>Duolingo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/img/tflat.png')}/>
         
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.vn.dic.e.v.ui&hl=vi')}>
            <Text style = {styles.text}>Từ điển TFlat</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/img/giao_tiep.png')}/>
         
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ndm.tienganh&hl=vi')}>
            <Text style = {styles.text}>Tiếng anh giao tiếp</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/img/ngu_phap.png')}/>
         
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.bkit.congthuctienganh&hl=vi')}>
            <Text style = {styles.text}>Công thức Tiếng Anh</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  render(){
    return (
  <ScrollView style={{marginTop: Constants.statusBarHeight,backgroundColor:'#f7f7f7'}} stickyHeaderIndices={[0]}>
        {this.Headder()}
        {this.MenuList()}
        {this.OtherApps()}

    </ScrollView>
  );
  
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

const styles1 = StyleSheet.create({
 

  text1:{
    fontSize: 20,
    color:"#00bcd4",
  },
  text: {
    paddingVertical:10,
    fontSize: 20,
    marginLeft: 15,
  },
});
export default Menu2;