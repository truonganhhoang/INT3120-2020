import React from 'react';
import { Card, Icon, Image } from 'react-native-elements';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
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
  const language_url = "../../../../images/vietnam-flag-icon-24.png"; 
  return (
      <SafeAreaView>
        {
          list.map((l, i) => (
            <Card>
              <ListItem
                containerStyle={styles.listItem}
                key={l.name}
                title={l.name}
                titleStyle={styles.textLeft}
                // bottomDivider
                // rightIcon={<Icon
                //   name={l.icon}
                //   color='#ff5e00'
                //   size={30}
                //   type="font-awesome"
                // />}
                rightAvatar={<Image 
                  source={require(language_url)}
                  style={{ width: 50, height: 50 }}
                />}
              />
            </Card>
          ))
        }
    </SafeAreaView>
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
    fontSize: 20
  },
  listItem: {
    height: 40
  }
});
export default SettingScreen; 