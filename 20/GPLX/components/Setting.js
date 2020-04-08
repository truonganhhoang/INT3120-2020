import React from 'react';
import { Button, View, Text ,TouchableOpacity, StyleSheet} from 'react-native';

function Setting() {

  var names= [
    {
      id: 0,
      name: 'BẰNG A1',
      detail :'Xe máy'
    },
    {
      id: 1,
      name: 'BẰNG A2',
      detail :'Xe mô tô 2 bánh '
    },
    {
      id: 2,
      name: 'BẰNG A3',
      detail :'Xe mô tô 3 bánh, xe lam...'
    },
    {
      id: 3,
      name: 'BẰNG A4',
      detail :'Máy kéo'
    },
    {
      id: 4,
      name: 'BẰNG B1',
      detail :'Ô tô tải trọng dưới 3.500kg'
    },
    {
      id: 5,
      name: 'BẰNG B2',
      detail :'Ô tô chở người đến 9 chỗ'
    },
    {
      id: 6,
      name: 'BẰNG C',
      detail :'Ô tô tải trên 3.500kg'
    },
    {
      id: 7,
      name: 'BẰNG D',
      detail :'Ô tô trở người từ 10 - 30 chỗ'
    },
    {
      id: 8,
      name: 'BẰNG E',
      detail :'Ô tô chở người trên 30 chỗ'
    },
    {
      id: 9,
      name: 'BẰNG F',
      detail :'Điều khiển các loại kéo móc'
    },
  ]
  return (
    <View>
      {
        names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}>
            <Text style={styles.text}>
              {item.name}
            </Text>
            <Text>{item.detail}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}
const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#d9f9b1',
     alignItems: 'center',
  },
  text: {
     color: '#4f603c'
  }
})
export default Setting;