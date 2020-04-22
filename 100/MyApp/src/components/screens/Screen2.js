import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Styles } from '../../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useScrollToTop } from '@react-navigation/native'

export default function Screen2({navigation}) {
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
    const ref = React.useRef(null);

    useScrollToTop(ref);
    return (
        <View >
            <View style={Styles.header}>
                <Text style={[Styles.h1text, {color: "#E1F5FE", margin: 10}]}>Danh mục</Text>
            </View>
            <ScrollView ref={ref}>
                {danhmuc.map( (value) =>(
                        <View key={value.key}>
                            <TouchableOpacity onPress={()=>(navigation.navigate('Tungdanhmuc'))}>
                                <Text style={Styles.list2s}>{value.danhmuc}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                )}
            </ScrollView>
        </View>
    )
}