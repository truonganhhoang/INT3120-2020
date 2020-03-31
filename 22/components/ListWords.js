import * as React from 'react';
import { ScrollView, View,StyleSheet ,Alert,Text, TextInput,} from 'react-native';

import styles from '../assets/css/css';

class ListWords extends React.Component {
  render(){
    return (
  <ScrollView style={styles.container}>
    <View style={styles.banner}>
        <Text style={styles.paragraph}>
         Danh sách từ vựng
        </Text>
    </View>
    <View style={styles.container2}>
     <TextInput
        title='Tìm kiếm'
        placeholder="Tìm Kiếm..."
        style={styles.TextInput}
      />
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('1')} >Ăn uống</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('2')}>Địa lý </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('3')}>Điện ảnh</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('4')}>Đo lường</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('5')} >Đô thị</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('6')}>Động vật </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('7')} >Gia đình</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('8')}>Giải trí </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('9')} >Giao thông</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('10')}>Hành động</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('11')} >Họ hàng</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('12')}>Mua sắm</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('13')} >Thời tiết</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('14')}>Du lịch</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('15')} >Giao thông</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('16')}>Phụ kiện</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() =>Alert.alert('17')} >Động vật</Text>
        </View>
        
        <View style={styles.button}> 
          <Text style={styles.text} onPress={() =>Alert.alert('18')}>Thực vật</Text>
        </View>
         
    </View>
    </ScrollView>
  );
  
  }
  
 
}

export default ListWords;