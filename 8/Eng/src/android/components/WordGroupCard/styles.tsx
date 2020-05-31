import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const fontSize = () => {
    if (WIDTH > 400) {
        return 14;
    } else if (WIDTH > 250) {
        return 12;
    } else {
        return 10;
    }
}
const styles = StyleSheet.create({
    containers: {
        top: '10%',
        height: '100%',
        width: '70%',
        left: '15%',
        position: 'relative',
    },
    card: {
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        borderRadius: 10
    },
    cardContainer: {
        height: '65%',
        width: '100%',
        position: 'absolute',
        zIndex: 0,
    },
    viewCard: {
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 0,
        height: '70%'
    },
    btnStyle: {
        backgroundColor: '#ff5e00',
        width: '50%',
        height:'95%'
    },
    textWordGroupName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
    },
    textVnMeaning: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ff5e00',
        fontSize: 16
    },
    textExplain: {
        fontSize: fontSize(),
        textAlign: 'center',
        color: 'black',
    },
    viewImg: {
        alignItems: 'center',
        height: '50%',
        justifyContent: 'center'
    },
    img: {
        width: WIDTH * 0.35,
        height: WIDTH * 0.35,
        borderRadius: WIDTH * 0.35 / 2,
        borderWidth: 1,
        borderColor: '#80808085',
    },
    viewTool: {
        flexDirection: 'column',
        backgroundColor: '#ff5e00',
        width: '15%',
        alignItems: 'center',
        padding: '1%',
        position: 'absolute',
        right: '-2%',
        borderRadius: 10,
        zIndex: 3,
        top: '-25%',
    },
    iconTool: {
        color: 'white',
        fontSize: 16,
    },
    viewIcon: {
        borderRadius: 35 / 2,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        marginTop: 5,
        marginBottom: 5,
    },
})

export default styles; 