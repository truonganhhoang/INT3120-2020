import * as React from 'react';
import {StyleSheet,TextInput,View,Alert,Button,ScrollView,Text,Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/css/css';

class AddWord extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      tuMoi: null,
      nghiaRutGon: null,
      nghiaDayDu: null,
      phienAm: null,
      tuLoai: null,
    };
  }

  render() {
    return (
    <ScrollView style={styles.container}>
    <View style={styles.banner}>
      <Text style={[styles.text_banner,{ flex: 1, flexDirection: 'column' }]} onPress={this._Done}>
      <Image style={styles.icon_back} source={require('../assets/icon/back.png')}/>
      Thêm Từ</Text>
      <Text style={{ flex: 1, flexDirection: 'column' }}></Text>
    </View>
    <View style={styles1.container2}>
      <Text style={styles1.text}>Nhập từ mới</Text>
      <TextInput
        title='Nhập Từ Mới:'
        style={styles1.TextInput}
      />
      <Text style={styles1.text}>Nghĩa rút gọn</Text>
      <TextInput
        title='Nghĩa rút gọn:'
        style={styles1.TextInput}
      />
      <Text style={styles1.text}>Nghĩa đầy đủ</Text>
      <TextInput
        title='Nghĩa đầy đủ:'
        style={styles1.TextInput}
      />
      <Text style={styles1.text}>Phiên Âm</Text>
      <TextInput
        title='Phiên âm:'
        style={styles1.TextInput}
      />
      <Text style={styles1.text}>Từ Loại</Text>
      <TextInput
        title='Từ loại:'
        style={styles1.TextInput}
      />
      <View style={[styles.button,{justifyContent: 'center'}]}>
         <Text style={styles.text} onPress={this._Done}> Thêm Từ</Text>
      </View>
      
  </View>
    </ScrollView>
  );
  }
  _Done= async () => {
    this.props.navigation.navigate('Menu');
    }

}

const styles1=StyleSheet.create({
  container2: {
    padding: 24,
    margin:10,
    marginTop:20,
    backgroundColor:'#ffffff',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  TextInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    fontSize: 20,
    padding:5,
    borderColor: '#65a844',
  },
  text:{
    fontFamily: 'Times New Roman',
    fontSize: 20,
    paddingVertical:5,
  },
});
export default AddWord;
