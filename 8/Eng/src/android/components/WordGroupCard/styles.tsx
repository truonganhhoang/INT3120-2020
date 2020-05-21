import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    containers: {
        top: HEIGHT * 0.05,
        height: HEIGHT*0.65,
        width: WIDTH * 0.7,
        left: WIDTH * 0.3 / 2,
        position: 'relative', 
    },
    card: {
        height: HEIGHT*0.54,
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
        zIndex: 0, 
    },
    viewBtn: {
        alignItems: 'center',
        position: 'absolute',
        // bottom: HEIGHT*0.15,
        // left: WIDTH*0.329/2,
        top: HEIGHT*0.54,
        left: WIDTH*0.4/2,
        zIndex: 2,
    },
    btnDetail: {
        backgroundColor: '#ff5e00',
        alignItems: 'center',
        borderRadius: 5,
        width: WIDTH * 0.3,
        height:HEIGHT*0.04
    },
    textWordGroupName: {
        marginBottom: HEIGHT*0.7*0.01, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: WIDTH*0.7*0.08, 
        marginTop: HEIGHT*0.7*0.08
    },
    textVnMeaning: {
        marginBottom: HEIGHT*0.7*0.05, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: '#ff5e00',
        fontSize: WIDTH*0.7*0.06
    }, 
    textExplain: {
        fontSize: WIDTH*0.7*0.06, 
        textAlign: 'center', 
        color: 'black'
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
        width: WIDTH*0.7*0.16,
        alignItems: 'center',
        padding: 5,
        position: 'absolute',
        right: -6,
        borderRadius: 6,
        zIndex: 2,
        top: HEIGHT*0.7*0.1
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