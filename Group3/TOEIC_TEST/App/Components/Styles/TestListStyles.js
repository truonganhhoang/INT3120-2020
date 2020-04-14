import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#1976D2'
    },
    title: {
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    iconLeft: {
        paddingStart: 20,
    },
    containerFlatList: {
        flex: 1,
        width: Dimensions.get("window").width-30,
        backgroundColor: '#F5F5F5',
        marginVertical: 6,
        marginHorizontal: 15,
        elevation: 5,
        borderRadius: 10,
        padding: 10
    },
})