import React from 'react';
import { Card, Icon, Image, Button } from 'react-native-elements';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Dimensions, Alert } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const list = [
  {
    title: 'Ngôn ngữ',
    icon: 'language',
    type: 'font-awesome'
  },
  {
    title: 'Các ứng dụng khác của PORO UET',
    icon: 'product-hunt',
    type: 'font-awesome'
  },
  {
    title: 'Chúng tôi có thể cải thiện ứng dụng này như thế nào?',
    icon: 'support',
    type: 'font-awesome'
  },
  {
    title: 'Chia sẻ ứng dụng',
    icon: 'share-alt',
    type: 'font-awesome'
  },
  {
    title: 'Tải âm thanh để sử dụng khi ngoại tuyến',
    icon: 'download',
    type: 'font-awesome'
  },
  {
    title: 'Thành thật xin lỗi nếu có những lỗi chính tả hoặc bản dịch sai xuất hiện trong ứng dụng này. Chúng tôi chỉ là một nhóm nhỏ, nên dù đã và đang cố gắng hết sức để cải thiện dần ứng dụng nhưng vẫn không thể tránh khỏi sai sót. Nếu bạn phát hiện ra lỗi sai, xin hãy liên hệ với chúng tôi qua email : duychien226@gmail.com!',
    icon: '',
    type: ''
  },

]

const SettingScreen = (props: { navigation?: any }) => {
  const { navigation } = props;
  const language_url = "../../../../images/vietnam-flag-icon-24.png";
  const showAlert = () =>
    Alert.alert(
      "Thông báo !",
      "Xin lỗi, chức năng đang trong quá trình xây dựng vui lòng quay lại sau. Xin cảm ơn !",
      [
        {
          text: "Quay lại",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        // { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => {
          if (item.type != '') {
            return (
              <View style={{
                flex: 1, flexDirection: 'row', shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                backgroundColor: 'white',
                marginBottom: 10,
                borderRadius: 3,
                padding: '3%'
              }}>
                <View style={{ flex: 9, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, color: "#ff5e00", fontWeight: 'bold' }}>
                    {item.title}
                  </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Icon
                    name={item.icon}
                    type={item.type}
                    color='black'
                    iconStyle={{ color: "#ff5e00" }}
                  />
                </View>
              </View>
            )
          }
          return (
            <View style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              backgroundColor: 'white',
              marginBottom: 10,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3%',
            }}>
              <View>
                <Text style={{ marginBottom: 5 }}>
                  {item.title}
                </Text>
                <Text>Sự ủng hộ của các bạn là động lực rất lớn đối với chúng tôi!</Text>
                <Text style={{ marginBottom: 10 }}>Xin cảm ơn.</Text>
              </View>
              <View style={{ width: '100%' }}>
                <Button
                  onPress={showAlert}
                  title="Gửi phản hồi qua email"
                  buttonStyle={{ backgroundColor: "#ff5e00", width: '60%', marginLeft: '20%' }}
                />
              </View>
            </View>
          )
        }}
        keyExtractor={item => item.title}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    height: '100%'
  },
});
export default SettingScreen; 