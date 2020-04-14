import { StyleSheet, Dimensions } from "react-native";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: WIDTH,
        height: HEIGHT,
    },
    flipCard: {
        width: WIDTH / 2,
        height: HEIGHT / 2,
        backfaceVisibility: 'hidden',
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
    }
});
export default styles;