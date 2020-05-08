import * as React from 'react';
import {StyleSheet,View,CheckBox,Text,Image,FlatList, TouchableOpacity} from 'react-native';
import styles from '../assets/css/css';
import DisplayList from './DisplayList';

class TickWords2 extends React.Component {
  render() {
    
    return (
    <View style={styles.container}>
      <View style={styles.banner}>
          <Text style={[styles.paragraph,]} onPress={this._Done}>
            <Image style={[styles.icon_back,]} source={require('../assets/icon/back.png')}/>Học từ đã chọn</Text>
        </View>
      <DisplayList/>
       <View style={[styles1.button1,{justifyContent: 'center' ,}]}>
         <Text style={[styles.text,{color:'#ffffff'}]} onPress={this._Practice}>Bắt đầu luyện tập</Text>
      </View>
    </View>
  );
  }
  _Practice= async () => {
    this.props.navigation.navigate('Menu');//tới trang luyện tập
    }
  _Done= async () => {
    this.props.navigation.navigate('Menu');
    }

}

const styles1 = StyleSheet.create({
  button: {
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    height:60,
    marginTop:10,
    borderWidth: 1,
    borderColor: '#dfeae1',
    paddingLeft: 15,
  },
  button1:{
    backgroundColor:'#0cbb66',
    height:50,
    flexDirection:'row',
    alignItems: 'center',
    color:'#ffffff',
    margin :10,
  },
  text: {
    fontSize: 20,
  },
});
export default TickWords2;
