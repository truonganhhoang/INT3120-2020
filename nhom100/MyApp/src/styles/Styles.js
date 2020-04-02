import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
        margin: 20,
        paddingHorizontal: 10,
    },
    vbox : {
        width: 160,
        height: 250,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        margin: 6,
        backgroundColor: "#eee"
    },
    avt: {
        width: 70,
        height: 70,
        borderColor: "gray",
        borderRadius: 35,
        borderWidth: 1,
        backgroundColor: "violet",
        alignItems: "stretch"
    },
    list1s:{
        flex: 1,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        alignItems:"center",
        // justifyContent: "center",
        paddingHorizontal: 30,
    },
    h1text: {
        fontSize: 30,
        fontWeight: "bold",
    },
    h2text:{
        fontSize: 25,
        fontWeight:"800",
    },
    h3text: {
        fontSize: 20,
        fontWeight: "bold",
        // marginLeft: 30,
    },
});
export default Styles;