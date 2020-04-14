import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import { ScrollView, TouchableHighlight, FlatList } from 'react-native-gesture-handler';


export default class Other extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCar: [
                { id: "1", name: "Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường", value: "Phạt tiền từ 80.000 đồng đến 100.000 đồng" },
                { id: "2", name: "Không chấp hành hiệu lệnh của đèn tín hiệu giao thông", value: "Phạt tiền từ 100.000 đồng đến 200.000 đồng"},
                { id: "3", name: "Không chấp hành hiệu lệnh, hướng dẫn của người điều khiển giao thông hoặc người kiểm soát giao thông", value: "Phạt tiền từ 100.000 đồng đến 200.000 đồng" },
                { id: "4", name: "Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường khi đi qua đường ngang, cầu chung", value: "Phạt tiền từ 80.000 đồng đến 100.000 đồng"},
                { id: "6", name: "Không có báo hiệu xin vượt trước khi vượt", value: "Phạt tiền từ 100.000 đồng đến 200.000 đồng"},
                { id: "7", name: "Chuyển hướng không nhường quyền đi trước cho người đi bộ, xe lăn của người khuyết tật qua đường tại nơi có vạch kẻ đường dành cho người đi bộ", value: "Phạt tiền từ 100.000 đồng đến 200.000 đồng"},
                { id: "8", name: "Chuyển hướng không nhường quyền đi trước cho xe thô sơ đang đi trên phần đường dành cho xe thô sơ", value: "Phạt tiền từ 100.000 đồng đến 200.000 đồng"},
                { id: "9", name: "Chuyển hướng không nhường đường cho các xe đi ngược chiều", value: "Phạt tiền từ 100.000 đồng đến 200.000 đồng"},
                { id: "10", name: "Dừng xe, đỗ xe trên phần đường xe chạy ở đoạn đường ngoài đô thị nơi có lề đường", value: "Phạt tiền từ 200.000 đồng đến 300.000 đồng"},
                { id: "11", name: "Không giữ khoảng cách an toàn để xảy ra va chạm với xe chạy liền trước hoặc không giữ khoảng cách theo quy định của biển báo hiệu \"Cự ly tối thiểu giữa hai xe\"", value: "Phạt tiền từ 100.000 đồng đến 200.000 đồng"},
            ]
        };
    }



    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.dataCar}
                    renderItem={({ item }) =>
                        <TouchableHighlight style={styles.container}>
                            <View style={styles.typesRank}>
                                <Text style={styles.headerName}>{item.name}</Text>
                                <Text style={styles.content}>{item.value}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                />
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 10,
        justifyContent: 'center',
    },
    typesRank: {
        backgroundColor: '#fff',
        flexDirection: "column",
        paddingVertical: 15,
        paddingHorizontal:20,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 4,
    },
    headerName: {
        fontSize:17
    },
    content: {
        color:'red'
    }
});