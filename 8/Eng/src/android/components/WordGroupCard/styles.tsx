import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    containers: {
        top: HEIGHT * 0.05,
        height: 510,
        width: WIDTH * 0.7,
        left: WIDTH * 0.3 / 2,
        position: 'relative'
    },
    card: {
        height: 420,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    viewCard: {
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 0
    },
    container: {
        width: WIDTH,
        height: HEIGHT,
    },
    viewBtn: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 60,
        left: WIDTH*0.2,
        zIndex: 2,
    },
    btnDetail: {
        backgroundColor: '#ff5e00',
        alignItems: 'center',
        borderRadius: 5,
        width: WIDTH * 0.3,
        height:HEIGHT*0.04
    },
    viewImg: {
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#80808085',
    },
    viewTool: {
        flexDirection: 'column',
        backgroundColor: '#ff5e00',
        width: 50,
        alignItems: 'center',
        padding: 5,
        position: 'absolute',
        right: -6,
        borderRadius: 6,
        zIndex: 2,
        top: 100
    },
    iconTool: {
        color: 'white',
        fontSize: 16,
    },
    viewIcon: {
        borderRadius: 35/2,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        width:35,
        height:35,
        marginTop: 5,
        marginBottom: 5,
    },
})

export default styles; 