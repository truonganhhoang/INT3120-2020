import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Styles } from '../../styles'

export default function Screen2() {
    const [danhmuc, setdanhmuc] = useState([
        {danhmuc: "Ngoại ngữ", key: "1"},
        {danhmuc: "Marketing", key: "2"},
        {danhmuc: "Kinh doanh- khởi nghiệp", key: "3"},
        {danhmuc: "Phát triển cá nhân", key: "4"},
        {danhmuc: "Tin học văn phòng", key: "5"},
        {danhmuc: "Thiết kế", key: "6"},
        {danhmuc: "Multimedia", key: "7"},
        {danhmuc: "Công nghệ thông tin", key: "8"},
        {danhmuc: "Kiến thức chuyên", key: "9"},
        {danhmuc: "Thể thao- sức khỏe", key: "10"},
        {danhmuc: "Âm nhạc", key: "11"},
        {danhmuc: "Nghệ thuật-đời sống", key: "12"},
        {danhmuc: "Hôn nhân- gia đình", key: "13"},
        {danhmuc: "Nuôi dạy con", key: "14"},
        {danhmuc: "Phong thủy", key: "15"},
    ])
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                {danhmuc.map( (value) =>(
                        <View key={value.key}>
                            <Text style={Styles.list2s}>{value.danhmuc}</Text>
                        </View>
                    )
                )}
            </ScrollView>
                {/* <Text style={styles.danhmuc}>Danh muc 1</Text>
                <Text style={styles.danhmuc}>Danh muc 1</Text>
                <Text style={styles.danhmuc}>Danh muc 1</Text>
                <Text style={styles.danhmuc}>Danh muc 1</Text>
                <Text style={styles.danhmuc}>Danh muc 1</Text> */}
            </View>
    )
}