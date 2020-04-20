import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
      marginLeft:16,
      marginRight:16,
      paddingLeft:8,
      paddingTop:8,
      paddingBottom:8,
      borderRadius:8,
      borderColor: 'black',
      borderWidth:1,
      backgroundColor:'white',
  },
  item:{
      marginTop:15,
      color:'black'
  },
  Keycorrect:{
      color:'green',
      fontWeight:'bold',
      textDecorationLine:'underline'
  },
  correct:{
      marginRight:80,
      color:'green'
  },
  notcorrect:{
      marginRight:80,
      color:'red'
  },
})

export default styles;
