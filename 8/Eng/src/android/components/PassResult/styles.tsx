import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  containers: {
    height: HEIGHT * 0.4,
    padding: WIDTH * 0.1,
  },
  container: {
    textAlign: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    lineHeight: 50,
  },
  comment: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  button: {
    width: 150,
    marginBottom: 5,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: '#FFF',
    borderColor: '#9CCC65'
  }
})

export default styles