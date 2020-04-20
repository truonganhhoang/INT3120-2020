import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d2d6d9'
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownItem:{
    marginTop:16,
    marginLeft:16,
    marginRight:16,
    
  },
  title:{
    flexDirection:'row',
    paddingLeft:16,
    backgroundColor:'white',
    paddingTop:16,
    paddingBottom:16
  }
});
export default styles;