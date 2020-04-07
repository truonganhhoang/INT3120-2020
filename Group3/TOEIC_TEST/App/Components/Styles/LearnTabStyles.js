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
  item2: {
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
  containerModal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: 20,
    minHeight: 100,
    padding: 30
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