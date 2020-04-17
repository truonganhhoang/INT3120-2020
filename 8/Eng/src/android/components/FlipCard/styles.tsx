import { StyleSheet, Dimensions } from "react-native";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: WIDTH/1.5+30,
        height: HEIGHT,
    },
    flipCard: {
        width: WIDTH / 2,
        height: HEIGHT / 2,
        backfaceVisibility: 'hidden',
        alignItems: 'center'
    },
    flipCardBack: {
        position: "absolute",
        top: 0,
        alignItems: 'center',
        marginTop: 20
    },
    flipText: {
        width: 90,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    flipImg: {
        width: 20,
        height: 20
    },
    iconTool:{
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        position:'absolute',
        zIndex:5,
        right:30,
        top:30
    },
    containerCard:{
        width: WIDTH / 1.5,
        height: HEIGHT / 1.5,
        position:'relative',
        marginBottom:HEIGHT/3,
        zIndex:0
    },
    speaking:{
        backgroundColor: '#ff5e00',
        borderRadius: 100,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 14,
        marginTop: 10,
        position:'absolute',
        zIndex:1,
        top:200,
        left:95,
        backfaceVisibility: 'hidden',
    },
    footer:{
        alignItems:'center',
        marginTop:20
    }
});
export default styles;