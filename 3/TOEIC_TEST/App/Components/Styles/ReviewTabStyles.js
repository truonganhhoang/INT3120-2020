import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#1976D2'
  },
  title: {
    alignContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  text: {
    color: '#616161',
    textAlign: 'center',
    paddingTop: 5,
    width: 80,
    height: 40,
    fontSize: 14,
  },
  icon:{
    textAlign: 'center',
  },
  view:{
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1 / 2, 
    margin: 5
  }
})