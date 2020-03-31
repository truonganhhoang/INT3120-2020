import React from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import {Avatar, Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Classrooms extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{
            text: 'LỚP HỌC',
            style: {color: '#000', fontWeight: 'bold'},
          }}
          containerStyle={{
            backgroundColor: '#FFF',
            justifyContent: 'center',
          }}
        />
        <Text style={{marginBottom: 20}}>Chưa có lớp học!</Text>
        <Button
          icon={
            <Icon
              name="plus"
              size={15}
              color="white"
            />
          }
          title="Tạo lớp học"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  userName: {
    paddingTop: 10,
    fontWeight: 'bold',
  },
  userInfo: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default Classrooms;
