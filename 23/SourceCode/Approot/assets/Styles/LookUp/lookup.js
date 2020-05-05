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

})

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: "#483D8B",
        fontWeight: "bold"
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,

    },
    item2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 2,
        borderColor: "#00BFFF",
        borderBottomWidth: 0.5,
        backgroundColor: '#fffff'
    }
});

export { mainLayout, styles }