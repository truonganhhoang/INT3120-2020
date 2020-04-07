import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
        margin: 20,
        paddingHorizontal: 10,
        backgroundColor: "#eee"
    },
    vbox : {
        width: 210,
        height: 250,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: "#fff"
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
        paddingHorizontal: 30,
    },
    list2s: {
        borderWidth: 1,
        padding: 12,
        borderColor: "gray",
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 22,
        fontWeight: "600",
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
        fontWeight: "600",
    },
    h4text: {
        fontSize: 16,
        fontWeight: "700",
    },
    minimg: {
        width: 210,
        height: 150,
        borderRadius: 8
    }
});
export default Styles;