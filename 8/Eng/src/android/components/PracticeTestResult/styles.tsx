import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT=Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  viewTitle: {
    marginTop: HEIGHT*0.1
  },
  viewPercent: {
    marginTop:20
  },
  viewInfo: {
    flexDirection: 'row',
    padding:20,
    marginTop:20
  },
  viewButtons: {
    top:HEIGHT*0.2
  },
  button: {
    borderRadius: 40,
    width: 200,
    height: 45,
    backgroundColor: '#ff5e00'
  },
  viewChildInfo: {
    marginRight:30,
    marginLeft:30
  },
  textInfo: {
    fontSize:20
  }
});

export default styles; 