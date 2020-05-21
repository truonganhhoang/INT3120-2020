import { StyleSheet, Dimensions } from 'react-native'; 
const SLIDER_WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height; 
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const styles = StyleSheet.create({
  containers: {
    height: HEIGHT*0.7,
  },
  container:{
    height:60,
    paddingBottom:25,
    backgroundColor:'#ff5e00'
  },
  centerComponent: {
    color: "#ff5e00",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  textLeft: {
    color: '#ff5e00',
    fontWeight: '700',
  },
  listItem: {
    height: 40
  },
  carouselContainer: {
    marginTop: 0,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
})

export default styles; 