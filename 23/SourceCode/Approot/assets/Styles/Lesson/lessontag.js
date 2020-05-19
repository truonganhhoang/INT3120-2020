import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    wrapper:{
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        marginBottom: 10
    },
    row:{
        flex: 1,
        flexDirection: "row"
    },
    col_1:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    col_2:{
        flex: 1,
        alignItems: 'flex-end',
        
    },
    progress_bar:{
        height: 10,
        width: "100%",
        backgroundColor: "#fafaff",
        borderWidth: 1,
        borderRadius: 10,
    }
});

export { styles }