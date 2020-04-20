import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  swipeListView:{
      paddingLeft: 10,
      paddingRight: 10,
      height:'100%'
  },
  listitem:{
      marginTop: 8,
      marginBottom: 8
	},
	container:{
		backgroundColor: 'white', // Set your own custom Color
		flexDirection: 'row',
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 1
    }
	},
	image:{
		width: 70, 
		height: 70,
		marginVertical: 10,
  	marginHorizontal: 20
	},
	content:{
		marginVertical: 10
	},
	englishWord:{
		fontSize: 20,
		color: 'blue'
  },
  add:{
    right:2,
    top:4,
    position:'absolute'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight:15,
    marginTop:15
  }
});
export default styles;