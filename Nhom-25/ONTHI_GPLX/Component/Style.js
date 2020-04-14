import { StyleSheet, Dimensions } from 'react-native';
import {color} from './color';

const height = Dimensions.get('window').height / 5.5;
const heightHeader = Dimensions.get('window').height / 8;
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
        height: height,
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
    }
  });