import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    containers: {
        top:'10%',
        height: '100%',
        width: '70%',
        left: '15%',
        position: 'relative', 
    },
    card: {
        height: '100%',
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
        height:'70%'
    },
    viewBtn: {
        alignItems: 'center',
        position: 'absolute',
        // bottom: HEIGHT*0.15,
        // left: WIDTH*0.329/2,
        top: '70%',
        left: '25%',
        zIndex: 2,
    },
    btnDetail: {
        backgroundColor: '#ff5e00',
        alignItems: 'center',
        borderRadius: 5,
        width: '90%',
        height:'75%',
        justifyContent:'center'
    },
    textWordGroupName: {
        marginBottom: '1%', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 24, 
        marginTop: '20%'
    },
    textVnMeaning: {
        marginBottom: '12%', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: '#ff5e00',
        fontSize: 16
    }, 
    textExplain: {
        fontSize: 14, 
        textAlign: 'center', 
        color: 'black'
    }, 
    viewImg: {
        alignItems: 'center',
        height:'50%'
    },
    img: {
        width: '80%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#80808085',
    },
    viewTool: {
        flexDirection: 'column',
        backgroundColor: '#ff5e00',
        width: '15%',
        alignItems: 'center',
        padding: 5,
        position: 'absolute',
        right: -6,
        borderRadius: 6,
        zIndex: 2,
        top: '10%'
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