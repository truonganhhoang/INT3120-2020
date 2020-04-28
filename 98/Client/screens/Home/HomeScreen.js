import * as React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import HomeItems from '../../components/Home/HomeItems';
import { Foundation } from '@expo/vector-icons';



export default function HomeScreen(props) {
const {navigation}=props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', backgroundColor: '#3399ff', paddingVertical: 20}}>
        <View style={{ flex: 0.8, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, color: '#fff', }}>
            Nhóm chủ đề
          </Text>

          <Text style={{ fontSize: 16, color: '#fff', marginVertical: 10 }}>
            Gồm 7 nhóm chủ đề chính, chia thành 2 loại lý thuyết và thực hành hỗ trợ bạn trong quá trình học.
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <View style={{backgroundColor: '#fff', height: 30, width: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{textTransform: "uppercase", color: '#3399ff', }}>Bắt đầu</Text>
            </View>

            <View style={{backgroundColor: '#fff', height: 30, width: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginLeft: 15}}>
              <Text style={{textTransform: "uppercase", color: '#3399ff', }}>Tra câu hỏi</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.28, justifyContent: 'center', alignItems: 'center' }}>
                  <Foundation name='clipboard-pencil' size={100} color='#f0ffff' />
        </View> 
      </View>
       
    <HomeItems
        navigation={navigation}
    />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
        width: null,
        height: 200,
        resizeMode: 'cover',
  },
});
