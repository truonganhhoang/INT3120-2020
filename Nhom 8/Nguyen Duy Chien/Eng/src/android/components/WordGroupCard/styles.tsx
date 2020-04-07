import { StyleSheet } from 'react-native'; 
const WIDTH=300;
const HEIGHT=400;
const styles = StyleSheet.create({
    btnDetail:{
        backgroundColor:'#ff5e00',
        width:150,
        alignItems:'center',
        height:35,
        borderRadius:20,
    },
    containers:{
        paddingLeft:40
    },
    container:{
        width:WIDTH-60,
        height:HEIGHT-50,
        marginTop:60,
        borderRadius:10,
        marginBottom:50
    },
    viewBtn:{
        alignItems:'center',
        position:'absolute',
        bottom:34,
        left:105
    },
    viewImg:{
        alignItems:'center',
    },
    img:{
        width:150,
        height:150,
        borderRadius:100,
        borderWidth:1,
        borderColor:'#80808085'
    },
    viewTool:{
        flexDirection:'column',
        backgroundColor:'#ff5e00',
        width:40,
        alignItems:'center',
        padding:5,
        position:'absolute',
        right:-2,
        top:100,
        borderRadius:6,
        zIndex:2,
    },
    iconTool:{
        color:'white',
        fontSize:12,
    },
    viewIcon:{
        borderRadius:30,
        borderWidth:1,
        borderColor:'white',
        padding:6,
        marginTop:5,
        marginBottom:5,
    },
    viewCard:{
        zIndex:0
    }
})

export default styles; 