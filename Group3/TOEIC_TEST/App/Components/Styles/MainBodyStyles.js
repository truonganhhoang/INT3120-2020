import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: "#F4F6F9",
    flex: 1
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  tabView: {
    flex: 1,
  },
  linearGradient: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#9aca40'
  },
  title: {
    fontSize: 18, 
    color: '#fff', 
    fontWeight: '600',
    padding: 10,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

})