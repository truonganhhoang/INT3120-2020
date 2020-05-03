import { StyleSheet } from 'react-native';

var onlineTranslation = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTranslateMode: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionTranslation: {
        height: 100,
        borderWidth: 1,
        borderColor: '#00BFFF',
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row'
    },
    wrapperInputArea: {
        flex: 9
    },
    wrapperIconArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24
    }
});

export { onlineTranslation }