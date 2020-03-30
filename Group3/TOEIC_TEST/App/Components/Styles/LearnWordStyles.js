import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerModal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: 20,
    minHeight: 100,
    padding: 30
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
    fontWeight: 'bold',
    fontSize: 20,
    color: '#f0f0f0'
  },
  iconRight: {
    marginRight: 20,
  },
  iconLeft: {
    paddingStart: 20,
  },
  item: {
    flex: 1,
    width: Dimensions.get("window").width-30,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    marginVertical: 6,
    marginHorizontal: 15,
    elevation: 5,
    borderRadius: 10,
  },
  lession: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  number: {
    paddingLeft: 10,
  },
  viewModal: {
    backgroundColor: '#1976D2',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  lession: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
})