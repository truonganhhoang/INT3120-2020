import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 4,
        margin: 4,
        paddingHorizontal: 4,
        backgroundColor: "#E1F5FE"
    },
    header:{
        backgroundColor: "#0288D1",
        height: 60,
        flexDirection: "row",
        alignItems: "center"
    },
    vbox: {
        width: 212,
        height: 248,
        borderRadius: 8,
        marginRight: 8,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 4,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 4,
    },
    avt: {
        width: 72,
        height: 72,
        borderColor: "gray",
        borderRadius: 36,
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
        paddingHorizontal: 28,
    },
    list2s: {
        padding: 12,
        borderRadius: 4,
        fontSize: 24,
        fontWeight: "600",
        backgroundColor: "#81D4FA",
        color: "#000",
        marginTop: 8,
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 4,
    },
    h1text: {
        fontSize: 28,
        fontWeight: "bold",
    },
    h2text:{
        fontSize: 24,
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
        width: 212,
        height: 152,
        borderRadius: 8
    }
});
export default Styles;