import{StyleSheet}from 'react-native'
const styles=StyleSheet.create({
    catagory:{
        padding:10,
        fontSize:20,
        backgroundColor:'#7a7a7a',
        color:'#fff'
    },
    sign:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: '#bcbcbc',
        borderBottomWidth: 2,
    },
    image:{
        resizeMode: 'contain' , 
        backgroundColor:'red'
    },
    text:{
        flex:1,
        padding:10,
    },
    id:{
        fontSize:18
    },
    name:{
        fontSize:18
    },
    title:{
        fontSize:15
    }
})
export default styles;