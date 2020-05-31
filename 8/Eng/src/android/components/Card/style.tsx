import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: 'white',
      shadowOpacity: 0.1,
      borderRadius: 4,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 0 },
      shadowColor: 'black'
    },
    title: {
      textTransform: "uppercase",
      marginTop: 8,
    },
    icon: {
      alignItems: 'flex-start',
      flex: 1,
      marginLeft:10
    },
    text: {
      alignItems: 'flex-end',
      flex: 1,
      alignContent: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      marginRight:5
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingRight: 20,
      alignItems: 'center',
      flex: 1
    },
    nameCard: {
      alignItems: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: '700',
    },
    vi: {
      color: '#fff',
      fontWeight:'bold',
      justifyContent:'center'
    }
  });
  export default styles;