import * as React from 'react';
import {StyleSheet,TextInput,View,Alert,Button,ScrollView,Text,Image} from 'react-native';
import Constants from 'expo-constants';
import styles from '../assets/css/css';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      search:''
    };
    }

  render() {
    return (
    <ScrollView style={{marginTop: Constants.statusBarHeight,backgroundColor:'#f8fff9'}} stickyHeaderIndices={[0]}>
    <View style={styles.banner}>
      <Text style={[styles.paragraph,]} onPress={this._Done}>
      <Image style={[styles.icon_back]} source={require('../assets/icon/back.png')}/>
      Thêm từ</Text>
    </View>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,marginTop:20,color:'#166d18'}}>Thêm từ mới</Text>
      <Text style={{textAlign:'center',fontSize:20,color:'#166d18'}}>(Điền đầy đủ các trường)</Text>
      <Text style={[styles1.text,{marginTop:15}]}>Từ mới</Text>
      <TextInput
        title='Nhập Từ Mới:'
        placeholder = 'VD: Word'
        style={styles1.TextInput}
      />
      <Text style={styles1.text}>Nghĩa rút gọn</Text>
      <TextInput
        title='Nghĩa rút gọn:'
        placeholder = 'VD: Từ vựng'
        style={styles1.TextInput}
      />
      <Text style={styles1.text}>Nghĩa đầy đủ</Text>
      <TextInput
        title='Nghĩa đầy đủ:'
        placeholder = 'VD: Từ vựng'
        style={styles1.TextInput}
      />
      <Text style={styles1.text}>Phiên âm</Text>
      <TextInput
        title='Phiên âm:'
        placeholder = 'VD: wə:d'
        style={styles1.TextInput}
      />
      <Text style={styles1.text}>Từ loại</Text>
      <TextInput
        title='Từ loại:'
        placeholder = 'VD: Danh từ'
        style={styles1.TextInput}
      />
      <View style={[styles1.button]}>
         <Text style={[styles.text,{color:'#ffffff'}]} onPress={this._Done}> Thêm từ</Text>
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
    paddingHorizontal:20,
    paddingVertical:40,
    marginHorizontal:20,
    marginVertical:40,
    backgroundColor:'#ffffff',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius:5,
  },
  TextInput: {
    height: 50,
    borderWidth: 1,
    fontSize: 20,
    borderColor: '#848383',
    borderRadius:20,
    backgroundColor: '#ffffff',
    paddingLeft:10,
    marginHorizontal:20,
  },
  text:{
    fontSize: 20,
    paddingTop:25,
    paddingBottom:5,
    marginHorizontal:20,
  },
  button:{
    height:60,
    alignItems: 'center',
    marginHorizontal:20,
    justifyContent: 'center',
    backgroundColor:'#65a844', 
    marginTop:50,
    borderRadius:5,
  },
});
export default AddWord;
