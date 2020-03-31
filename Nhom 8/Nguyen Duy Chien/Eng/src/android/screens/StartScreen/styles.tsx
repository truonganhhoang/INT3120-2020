import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  stretch: {
    width: 500,
    height: 1920,
    resizeMode: 'stretch'
  },
  setting: {
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: 10,
    paddingTop: 10
  },
  favorite: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 10,
    paddingTop: 10,
  },
  logo: {
    alignItems: 'center',
    flex: 1,
  },
  headerBar: {
    flexDirection: 'row',
    paddingTop: 5,
    marginBottom: 10,
    borderBottomColor: '#6666667a',
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: '#2089dc'
  },
  container: {
    //backgroundColor: '#f8a136'
    backgroundColor: 'white',
    paddingBottom: 70
  }
})

export default styles; 