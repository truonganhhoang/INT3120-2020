import { StyleSheet, Dimensions } from "react-native";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        // top: HEIGHT * 0.14,
        // width: WIDTH * 0.7,
        height: '50%',
        backgroundColor: 'white',
    },
    flipCard: {
        width: '100%',
        height: '85%',
        backfaceVisibility: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
        borderRadius: 15,
        padding:'5%'
    },
    flipCardBack: {
        position: "absolute",
        top: 0,
        alignItems: 'center',
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
    iconTool: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        zIndex: 5,
        right: 30,
        top: 30
    },
    // containerCard: {
    //     width: WIDTH / 1.4,
    //     height: 500,
    //     position: 'relative',
    //     marginBottom: HEIGHT / 3,
    //     zIndex: 0,
    // },
    speaking: {
        backgroundColor: '#ff5e00',
        borderRadius: 100,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 14,
        marginTop: 30,
        position: 'absolute',
        zIndex: 1,
        top: 200,
        left: 120,
        backfaceVisibility: 'hidden',
    },
    footer: {
        alignItems: 'center',
        marginTop: 20
    },
    iconStar: {
        // right: 10,
        // paddingRight: 5,
        // marginBottom:10,
    }
});
export default styles;