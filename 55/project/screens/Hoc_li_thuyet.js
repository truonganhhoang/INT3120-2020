import * as React from 'react';
import { StyleSheet } from "react-native"
import { FlatList } from 'react-native-gesture-handler';
import { RowLearn } from '../components/RowLearn';

const dataHoc = [
    {
        id: '1',
        img: require('../images/khai_niem.jpg'),
        name: 'KHÁI NIỆM VÀ QUY TẮC',
        number: 75,
    },
    {
        id: '2',
        img: require('../images/he_thong.jpg'),
        name: 'BIỂN BÁO ĐƯỜNG BỘ',
        number: 36,
    },
    {
        id: '3',
        img: require('../images/sa_hinh.jpg'),
        name: 'SA HÌNH',
        number: 34,
    },
    {
        id: '4',
        img: require('../images/van_hoa.jpg'),
        name: 'VĂN HÓA VÀ ĐẠO ĐỨC',
        number: 36,
    },
]

export default function Hoc_li_thuyet({ navigation }) {
    return (
        <FlatList style={styles.container}
            data={dataHoc}
            renderItem={({ item }) => {
                return (
                    <RowLearn element={item} Press={() => navigation.navigate('Khai_niem')} />
                )
            }}
        >

        </FlatList>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})