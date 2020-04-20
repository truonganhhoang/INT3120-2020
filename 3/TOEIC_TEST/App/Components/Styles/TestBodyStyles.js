import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#1976D2'
  },
  title: {
    alignContent: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white'
  },
  iconLeft: {
    paddingStart: 20,
  },
  containerFlatList: {
    flex:1,
    width: Dimensions.get("window").width - 30,
    backgroundColor: '#F5F5F5',
    marginVertical: 6,
    marginHorizontal: 15,
    elevation: 4,
    borderRadius: 10,
    padding: 10
  },
  slide1: {
    flex: 1,
    padding: 10,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  question: {
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: '#9DD6EB'
  },
  submit: {
    backgroundColor: '#97CAE5',
    borderRadius: 20,
    alignSelf: 'center',
    // marginTop: -60,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    width: 120,
    elevation: 6,
  },
  content: {
    fontSize: 20,
    fontWeight: "800"
  },
  option: {
    backgroundColor: '#97CAE5',
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
  option1: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 17,
  }
})