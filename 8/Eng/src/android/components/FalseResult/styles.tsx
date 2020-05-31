import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  containers: {
    height: '40%',
    justifyContent: 'center',
    width: '80%',
    alignItems: 'center'
  },
  container: {
    textAlign: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: '5%'
  },
  comment: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: '5%'
  },
  button: {
    width: '100%',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#FFF',
    marginBottom:'5%',
  }
})

export default styles