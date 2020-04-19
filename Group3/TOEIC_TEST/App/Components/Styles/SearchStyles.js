import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
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
    fontWeight: '600',
    fontSize: 18,
    paddingLeft: 10,
    color:'#FAFAFA'
  },
  iconRight: {
    paddingEnd: 20,
  },
  iconLeft: {
    paddingStart: 20,
  },
  input: {
    height: 40,
    width: Dimensions.get('screen').width - 130,
    borderColor: '#808080',
    borderBottomWidth: 1,
    color: '#FAFAFA',
    fontSize: 18
  },
  item: {
    marginLeft: 50,
    backgroundColor: '#1976D2',
    marginRight: 50,
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
    padding: 15,
  }
})