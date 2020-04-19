import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 5,
        margin: 5,
        paddingHorizontal: 5,
        backgroundColor: "#E1F5FE"
    },
    header:{
        backgroundColor: "#0288D1",
        height: 60,
        flexDirection: "row",
        alignItems: "center"
    },
    vbox : {
        width: 210,
        height: 250,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
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
        padding: 12,
        borderRadius: 5,
        fontSize: 22,
        fontWeight: "600",
        backgroundColor: "#81D4FA",
        color: "#000",
        marginTop: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
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