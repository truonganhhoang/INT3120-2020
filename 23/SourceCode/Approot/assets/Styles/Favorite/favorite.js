import { StyleSheet } from 'react-native';

const mainLayout = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    header: {
        flex: 1,
    },
    content: {
        flex: 12,
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
});

const tag = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    wordText: {
        fontSize: 20,
        color: '#483D8B',
        fontWeight: 'bold'
    },
    typeText: {
        fontSize: 16,
        color: 'gray'
    },
    icon: {
        height: 24,
        width: 24,
        marginLeft: 10
    }
});

export { mainLayout, tag };
