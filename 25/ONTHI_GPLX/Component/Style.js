import { StyleSheet, Dimensions } from 'react-native';
import {color} from './color';

const heightWindow = Dimensions.get('window').height;
const widthWindow = Dimensions.get('window').width;
const heightCard = heightWindow / 5.5;
const heightHeader = heightWindow / 8;
const heightCardExam = (widthWindow - 30)/3;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginLeft: 8,
        // marginRight: 8,
    },
    borderbottom: {
        borderBottomWidth: 1,
        borderBottomColor: color.ButtonCard,
    },
    header: {
        backgroundColor: color.header,
        color: color.textButton,
        height: heightHeader,
    },
    iconHeader: {
        fontSize: 20, 
        color: color.textButton,
    },
    Heading: {
        color: color.colorDark,
    },
    subText: {
        color: color.colorSubText,
        marginLeft: 0,
        marginBottom: 0,
    },
    titleId: {
        fontSize: 20,
        color: color.header,
        marginBottom: 2,
    },
    primaryText: {
        fontSize: 20,
        color: color.colorDark,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    body: {
        padding: 10,
    },
    selected: {
        backgroundColor: color.header,
    },
    buttonCard: {
        backgroundColor: color.ButtonColor,
        alignItems: "center", 
        height: heightCard,
        // textAlign: "center",
    },
    pass: {
        color: color.colorPass,
    },
    fail: {
        color: color.colorFail,
    },
    cardExplain: {
        backgroundColor: color.colorExplain,
    },
    CardExam: {
        backgroundColor: color.textButton,
        alignItems: 'center',
        justifyContent: 'center',
        height: heightCardExam,
        width: heightCardExam,
        marginRight: 4,
    }
  });