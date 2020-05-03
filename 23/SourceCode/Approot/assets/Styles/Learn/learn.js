import { StyleSheet } from 'react-native';

let mainLayout = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    header: {
        flex: 1,
    },
    content: {
        flex: 12,
        margin: 10
    },
});

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 24,
        color: '#483D8B',
        fontWeight: 'bold'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    item2: {
        padding: 20,
        margin: 2,
        borderColor: "#00BFFF",
        borderBottomWidth: 0.5,
        backgroundColor: '#fffff'
    },
    title: {
        color: 'black',
        fontSize: 28,
        marginVertical: 10,
    }
});

let common = {
    mainBackgroundColor: "#00BFFF",
    mainColor: "#ffffff"
}
let common_styles = StyleSheet.create({
    wrapper: {

    },
    title: {
        color: "#483D8B",
        fontSize: 20,
        fontWeight: "bold"
    },
})

let styles_section_3 = StyleSheet.create({
    wrapper: {
        flex: 1,

    },
    row: {
        marginBottom: 10,
    },
    tag_wrapper: {
        borderWidth: 1,
        borderColor: common.mainBackgroundColor,
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    progress_bar: {
        height: 10,
        width: "100%",
        backgroundColor: "#fafaff",
        borderWidth: 1,
        borderRadius: 10,
    },
    tag: {
        borderWidth: 1,
        borderColor: "#0000ff",
        borderRadius: 5,
        padding: 5,
        backgroundColor: common.mainBackgroundColor,
        marginRight: 10
    },
    tag_text: {
        textAlign: "center",
        color: common.mainColor,
    }

});

export { mainLayout, styles, common, common_styles, styles_section_3 };
