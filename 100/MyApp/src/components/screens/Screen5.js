import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Styles from '../../styles/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Screen5 extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <View style={Styles.header}>
                    <Text style={[Styles.h1text, {color: "#E1F5FE", margin: 8}]}>Thông báo</Text>
                </View>
                <View style={Styles.container}>
                    <View style={localStyles.header}>
                        <View style={Styles.avt}></View>
                        <Text style={[localStyles.name, Styles.h1text]}>Tên Của Bạn</Text>
                    </View>
                    <View style={[Styles.list1s, {flexDirection: "row"}]}>
                        <FontAwesome5 name="user-circle" size={24} color="gray"/>
                        <Text style={[Styles.h3text, localStyles.text]}>Thiết lập tài khoản</Text>
                    </View>
                    <View style={[Styles.list1s, {flexDirection: "row"}]}>
                        <FontAwesome5 name="unlock-alt"  size={24} color="gray" />
                        <Text style={[Styles.h3text, localStyles.text]}>Kích hoạt khóa học</Text>
                    </View>
                    <View style={[Styles.list1s, {flexDirection: "row"}]}>
                        <FontAwesome5 name="list-alt"  size={24} color="gray" />
                        <Text style={[Styles.h3text, localStyles.text]}>Điều khoản chính sách</Text>
                    </View>
                    <View style={[Styles.list1s, {flexDirection: "row"}]}>
                        <FontAwesome5 name="question-circle"  size={24} color="gray"/>
                        <Text style={[Styles.h3text, localStyles.text]}>Trợ giúp</Text>
                    </View>
                    <View style={[Styles.list1s, {flexDirection: "row"}]}>
                        <FontAwesome5 name="star"  size={24} color="gray"/>
                        <Text style={[Styles.h3text, localStyles.text]}>Đánh giá Edumall</Text>
                    </View>
                    <View style={[Styles.list1s, {flexDirection: "row"}]}>
                        <FontAwesome5 name="power-off"  size={24} color="hotpink" />
                        <Text style={[Styles.h3text, localStyles.text]}>Đăng xuất</Text>
                    </View>
                    <View style={[Styles.list1s, {flexDirection: "row"}]}>
                        <Text>Phiên bản: 0.0.1</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    header: {
        flex: 1.6,
        padding: 8,
        borderColor: "gray",
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    name: {
        marginHorizontal: 8,
        marginLeft: 20,
    },
    text:{
        marginLeft: 20,
    }
})