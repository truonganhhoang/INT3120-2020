import { StyleSheet } from 'react-native';

var practice = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    header: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
    },
    wordSection: {
        height: 80,
        width: '100%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00BFFF',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    normalText: {
        fontSize: 32
    },
    wordText: {
        fontSize: 24,
        color: '#483D8B',
        fontWeight: 'bold'
    },
    spellingText: {
        fontSize: 24,
        color: '#00BFFF'
    },
    question: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10
    }
});

var tag = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        paddingLeft: 0,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginRight: 5
    },
    iconSection: {
        flex: 1
    },
    contentSection: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 24,
        height: 24
    }
});

var header = StyleSheet.create({
    tagSection: {
        flexDirection: 'row',
        flex: 9
    },
    iconSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    icon: {
        width: 32,
        height: 32
    }
});

export { practice, tag, header }