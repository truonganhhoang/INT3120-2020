import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { CellTest } from '../components/CellTest';


export default function Thi_sat_hach({ navigation }) {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.row}>
                <CellTest progress='0/150 câu' de='Đề số 1' on_Press={() => navigation.navigate('Hoc_li_thuyet')} />
                <CellTest progress='0/20 câu' de='Đề số 2' />
                <CellTest progress='0/20 câu' de='Đề số 3' />
            </View>

            <View style={styles.row}>
                <CellTest progress='0/150 câu' de='Đề số 4' on_Press={() => navigation.navigate('Hoc_li_thuyet')} />
                <CellTest progress='0/20 câu' de='Đề số 5' />
                <CellTest progress='0/20 câu' de='Đề số 6' />
            </View>

            <View style={styles.row}>
                <CellTest progress='0/150 câu' de='Đề số 7' on_Press={() => navigation.navigate('Hoc_li_thuyet')} />
                <CellTest progress='0/20 câu' de='Đề số 8' />
                <CellTest progress='Ngẫu nhiên' de='TẠO ĐỀ' />
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

})