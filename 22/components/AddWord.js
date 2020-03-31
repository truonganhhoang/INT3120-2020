import * as React from 'react';
import {StyleSheet,TextInput,View,Alert,Button,ScrollView,Text,AppRegistry} from 'react-native';
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

  InsertDataToServer = () =>{
 const { tuMoi }  = this.state ;
 const { nghiaRutGon }  = this.state ;
 const { nghiaDayDu }  = this.state ;
 const { phienAm }  = this.state ;
 const { tuLoai }  = this.state ;
 
fetch('./_AddWord.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      tu_moi:tuMoi,
      nghia_rg:nghiaRutGon,
      nghia_dd:nghiaDayDu,
      phien_am:phienAm,
      tu_loai:tuLoai,
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }
  
  render() {
    return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.paragraph}>Thêm Từ</Text>
      </View>
    <View style={styles.container2}>
      <TextInput
        title='Nhập Từ Mới:'
        placeholder="Nhập Từ Mới..."
        onChangeText={tuMoi => this.setState({tuMoi})}
        style={styles.TextInput}
      />
      <TextInput
        title='Nghĩa rút gọn:'
        placeholder="Nghĩa rút gọn..."
        onChangeText={nghiaRutGon => this.setState({ nghiaRutGon })}
        style={styles.TextInput}
      />
      <TextInput
        title='Nghĩa đầy đủ:'
        placeholder="Nghĩa đầy đủ..."
        onChangeText={nghiaDayDu => this.setState({ nghiaDayDu })}
        style={styles.TextInput}
      />
      <TextInput
        title='Phiên âm:'
        placeholder="Phiên âm..."
        onChangeText={phienAm => this.setState({ phienAm })}
        style={styles.TextInput}
      />
      <TextInput
        title='Từ loại:'
        placeholder="Từ loại..."
        onChangeText={tuLoai => this.setState({ tuLoai })}
        style={styles.TextInput}
      />
      <View style={[styles.button,{justifyContent: 'center'}]}>
         <Button title='Thêm từ' color="#ffffff" onPress={this.InsertDataToServer}/>
      </View>
      <View style={[styles.button,{justifyContent: 'center', backgroundColor:'red'}]}>
        <Button title='Trở Lại' color="#ffffff" onPress={this._Done}/>
      </View>
  </View>
    </ScrollView>
  );
  }
  _Done= async () => {
    this.props.navigation.navigate('Start');
    }

}
AppRegistry.registerComponent('AddWord', () => AddWord);
export default AddWord;
