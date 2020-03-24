import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
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
    fontSize: 20,
    color: 'white'
  },
  iconRight: {
    marginRight: 20,
  },
  item: {
    backgroundColor: '#F5F5F5',
    paddingBottom: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 5,
    borderRadius: 10,
  },
  lession:{
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  number:{
    paddingLeft: 10,
  }
  
})