import { StyleSheet } from 'react-native';

let mainLayout = StyleSheet.create({
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
    footer: {
        flex: 1,
    }
});

const common = {
    mainBackgroundColor: "#00BFFF",
    mainColor: '#ffffff'
};

let commonStyles = StyleSheet.create({
    wrapper: {
        margin: 10,
    },
    title: {
        color: '#483D8B',
        fontSize: 20,
        fontWeight: 'bold'
    },
});


let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {

    },
    section_1: {
        marginTop: 5,
        flex: 3
    },
    section_2: {
        flex: 2
    },
    section_3: {
        flex: 5,
        margin: 10
    }
});

let stylesSection1 = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: common.mainBackgroundColor,
        borderRadius: 8,
        borderColor: '#6A5ACD',
        margin: 10,
    },
    content_wrapper: {
        margin: 10,
    },
    title: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    icon_refresh: {
        width: 24,
        height: 24
    },
    wrapperIconRefresh: {
        position: 'absolute',
        right: 0,
        bottom: 8
    },
    word_type: {
        color: "#483D8B",
        fontWeight: "bold",
        marginVertical: 10
    },
    wrapperIconSpeaker: {
        position: 'absolute',
        right: 5,
        top: 5,
    },
    icon_speaker: {
        width: 24,
        height: 24,
    },
    meaning: {
        color: '#ffffff'
    }
});

let styles_section_2 = StyleSheet.create({
    wrapper: {
        margin: 10,
    },
    button: {
        backgroundColor: common.mainBackgroundColor,
        padding: 10,
        borderRadius: 5,
        width: '50%',
        marginTop: 8
    },
    button_text: {
        color: "#ffffff",
        textAlign: "center"
    },
    icon_online_translate: {
        width: 32,
        height: 32,
        position: "absolute",
        left: 5,
        top: 3
    }
});

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
        width: '100%',
        backgroundColor: '#fafaff',
        borderWidth: 1,
        borderRadius: 10,
    },
    tag: {
        borderWidth: 1,
        borderColor: '#0000ff',
        borderRadius: 5,
        padding: 5,
        backgroundColor: common.mainBackgroundColor,
        marginRight: 10
    },
    tag_text: {
        textAlign: 'center',
        color: common.mainColor,
    }
});

export { mainLayout, common, commonStyles, styles, stylesSection1, styles_section_2, styles_section_3 }