import * as React from 'react';
import { View, Image, Text, Animated, Alert, } from 'react-native';
import { StyleSheet, Dimensions } from "react-native"
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

var dataCam = [
    {
        id: '1',
        img: require('../images/bien_bao_cam/1.jpg'),
        name: 'Cấm đi xe đạp',
        text: 'Để báo cấm xe đạp đi qua.'
    },
    {
        id: '2',
        img: require('../images/bien_bao_cam/2.jpg'),
        name: 'Cấm xe súc vật kéo',
        text: 'Để báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.'
    },
    {
        id: '3',
        img: require('../images/bien_bao_cam/3.jpg'),
        name: 'Hạn chế trọng lượng xe',
        text: 'Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ của nhà nước quy định, có trọng lượng toàn bộ (cả xe và hàng) vượt quá trị số ghi trên biển đi qua.'
    },
    {
        id: '4',
        img: require('../images/bien_bao_cam/4.jpg'),
        name: 'Hạn chế chiều cao',
        text: 'Cấm các xe (cơ giới và thô xơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định có chiều cao (tính đến điểm cao nhất kể cả xe và hàng hóa) vượt quá giá trị ghi số ghi trên biển không được đi qua.'
    },
    {
        id: '5',
        img: require('../images/bien_bao_cam/5.jpg'),
        name: 'Hạn chế chiều ngang',
        text: 'Cấm các xe (cơ giới và thô xơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định có chiều ngang (kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được qua.'
    },
    {
        id: '6',
        img: require('../images/bien_bao_cam/6.jpg'),
        name: 'Hạn chế chiều dài ôtô',
        text: 'Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định, có độ dài toàn bộ kể cả xe và hàng lớn hơn trị số ghi trên biển đi qua.'
    },
    {
        id: '7',
        img: require('../images/bien_bao_cam/7.jpg'),
        name: 'Cấm rẽ trái',
        text: 'Cấm rẽ trái (theo hướng mũi tên chỉ) ở những chỗ đường giao nhau. Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) trừ các xe được ưu tiên theo luật lệ nhà nước quy định được rẽ trái.'
    }
]

var dataLenh = [
    {
        id: '1',
        img: require('../images/bien_bao_hieu_lenh/1.jpg'),
        name: 'Hướng đi phải theo',
        text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng.'
    },
    {
        id: '2',
        img: require('../images/bien_bao_hieu_lenh/2.jpg'),
        name: 'Hướng đi phải theo',
        text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ phải.'
    },
    {
        id: '3',
        img: require('../images/bien_bao_hieu_lenh/3.jpg'),
        name: 'Hướng đi phải theo',
        text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ trái.'
    },
    {
        id: '4',
        img: require('../images/bien_bao_hieu_lenh/4.jpg'),
        name: 'Hướng đi phải theo',
        text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ phải.'
    },
    {
        id: '5',
        img: require('../images/bien_bao_hieu_lenh/5.jpg'),
        name: 'Hướng đi phải theo',
        text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ trái.'
    },
    {
        id: '6',
        img: require('../images/bien_bao_hieu_lenh/6.jpg'),
        name: 'Hướng đi phải theo',
        text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng và rẽ phải.'
    },
    {
        id: '7',
        img: require('../images/bien_bao_hieu_lenh/7.jpg'),
        name: 'Hướng đi phải theo',
        text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng và rẽ trái.'
    },
    {
        id: '8',
        img: require('../images/bien_bao_hieu_lenh/8.jpg'),
        name: 'Hướng đi phải theo',
        text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ phải và rẽ trái.'
    },

]


export class Row extends React.Component {

    render() {

        return (
            <TouchableOpacity>
                <View style={styles.row}>

                    <View style={styles.left}>
                        <Image
                            style={styles.image}
                            source={this.props.element.img}
                        />
                    </View>


                    <View style={styles.right}>
                        <Text style={styles.name}>
                            {this.props.element.name}
                        </Text>

                        <Text style={styles.text}>
                            {this.props.element.text}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const Tab = createMaterialTopTabNavigator();

export function Bien_bao() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: "#66BB6A",
                },
            }}>

            <Tab.Screen name='BIỂN BÁO CẤM' component={Cam} />
            <Tab.Screen name='BIỂN BÁO HIỆU LỆNH' component={Hieu_lenh} />
        </Tab.Navigator>
    )
}

export function Cam() {

    return (
        <FlatList
            style={styles.container}
            data={dataCam}
            renderItem={({ item }) => {
                return (
                    <Row element={item} />
                )
            }}
        >
        </FlatList>
    )
}

export function Hieu_lenh() {
    return (
        <FlatList
            style={styles.container}
            data={dataLenh}
            renderItem={({ item }) => {
                return (
                    <Row element={item} />
                )
            }}
        >
        </FlatList>
        // <Text> Hiệu lệnh nè a </Text>
    )
}


const { height, width } = Dimensions.get('window');
const left = 120 / 410 * width;
const right = width - left;
const imageSize = 90 / 120 * left;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
    },

    row: {
        flexDirection: "row",
        backgroundColor: "white",
        borderColor: "#ccc",
        borderTopColor: "#eee",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },

    left: {
        width: left,
        justifyContent: "center",
        alignItems: "center",
    },

    right: {
        width: right,
    },

    image: {
        width: imageSize,
        height: imageSize,
        margin: 10,
    },

    name: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 5,
    },

    text: {
        color: "#B7B7B7",
        marginRight: 10,
        marginBottom: 5,
    }
})