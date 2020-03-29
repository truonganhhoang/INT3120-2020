import React from 'react';
import { Header, Card, Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Back } from '../../components/Back';
const list = [
  {
    name: 'Ngôn ngữ',
    icon: 'users'
  },
  {
    name: 'Các ứng dụng khác của PORO',
    icon: 'users'
  },
  {
    name: 'Chúng tôi có thể cải thiện ứng dụng này như thế nào',
    icon: 'users'
  },
  {
    name: 'Chia sẻ ứng dụng',
    icon: 'users'
  },
  {
    name: 'Tải âm thanh để sử dụng khi ngoại tuyến',
    icon: 'users'
  },

]
const SettingScreen = (props: { navigation?: any }) => {
  const { navigation } = props;
  
  return (
    <View>
      <Header containerStyle={styles.container}
        leftComponent={
          <Back
            navigation={navigation}
          />}
        centerComponent={{ text: 'Tùy chỉnh', style: styles.centerComponent }}
      />
      <View>
        {
          list.map((l, i) => (
            <Card>
              <ListItem
                containerStyle={styles.listItem}
                key={l.name}
                title={l.name}
                titleStyle={styles.textLeft}
                bottomDivider
                rightIcon={<Icon
                  name={l.icon}
                  color='#ff5e00'
                  size={30}
                  type="font-awesome"
                />}
              />
            </Card>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    height: 60,
    backgroundColor:'#ff5e00'
  },
  centerComponent: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
  textLeft: {
    color: '#ff5e00',
    fontWeight: '700',
  },
  listItem: {
    height: 40
  }
});
export default SettingScreen; 