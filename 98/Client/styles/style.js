'use strict';
import {StyleSheet, NativeModules} from 'react-native';

var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 0,
      
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
  
    },
    labelText: {
      fontSize: 22,
      color: '#333333',
      fontWeight: 'normal',
      margin: 15,
  
    },
    itemContainer: {
        marginHorizontal: 10,
        paddingVertical: 15,
        paddingLeft: 0,
        paddingRight: 10,
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
      },
      floatLeft: {
          flex: 2.5,
          alignItems: 'center',
      },
      floatRight: {
          flex: 7.5,

      },
      title: {
          color: "gray",
          fontSize: 19,
          
      },
      briefDescription: {
        color: "gray",
        fontSize: 14,
        textAlign: "justify",
        marginVertical: 10
      },
      
});

export default styles;