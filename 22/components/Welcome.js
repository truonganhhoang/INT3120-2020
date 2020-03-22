import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, } from 'react-native';

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/nyanko.jpg')} />
         <Text style={styles.paragraph}>
          Không học mỗi ngày là không được đâu đấy
        </Text>
        <View style={styles.button}>
          <Button title='Bắt Đầu Học' color="#ffffff" onPress/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 200,
    borderRadius:10,
    marginBottom:10,
  }, 

  button:{
    marginBottom:-35,
    backgroundColor:'#1ec4da',
    borderRadius:'50%',
  },
});
