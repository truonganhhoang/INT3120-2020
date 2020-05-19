import { StyleSheet, Dimensions } from 'react-native'; 
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const styles = StyleSheet.create({
  header: {
    paddingTop: 0, 
    height: 60, 
    backgroundColor: '#E65100'
  }, 
  centerComponent: {
    color: '#FFF', 
    fontWeight: '700', 
    fontSize: 20,  
  },
  carouselContainer: {
    marginTop: 50
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
  counter: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "500",
    textAlign: 'center',
    position:'absolute',
    bottom:ITEM_HEIGHT/1.2,
    left:ITEM_WIDTH/1.6,
    color:'#FFFFFF'
  }
}); 

export default styles; 