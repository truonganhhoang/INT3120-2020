import * as React from 'react';
import { StyleSheet } from "react-native"
import { FlatList } from 'react-native-gesture-handler';
import RowLearn from '../components/RowLearn';

import { connect } from 'react-redux';

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

class Hoc_li_thuyet extends React.Component {

    render() {
        return (
            <FlatList style={styles.container}
                data={this.props.Learns}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <RowLearn element={item} Press={() => navigation.navigate('Khai_niem')} />
                    )
                }}
            >

            </FlatList>
        )
    }
}

function mapStateToProps(state) {
    return { Learns: state.Learns }
}

export default connect(mapStateToProps)(Hoc_li_thuyet);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})