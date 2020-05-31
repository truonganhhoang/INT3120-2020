import * as React from 'react';
import { Image, Alert, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';


import Profile from './Profile';
import { Man } from './Man';
import Home from './Home';
// import Menu from './Drawer';
import { test } from './test';
import Thi_sat_hach from './Thi_sat_hach';
import Hoc_li_thuyet from './Hoc_li_thuyet';
import Tra_cuu_luat from './Tra_cuu_luat';
import Meo_thi from './Meo_thi';
import Bien_bao from './Bien_bao';
import Help from './Help';
import { Anima } from './Anima';
import Khai_niem from './HocLiThuyet/Khai_niem';
import SearchLawDetail from './TraCuuLuat/SearchLawDetail';
// import { Navigation } from 'react-native-navigation';





const Stack = createStackNavigator();

class StackScreen extends React.Component {
    Reset = () => {
        let cf = Alert.alert(
            'Đặt lại tất cả bài học',
            'Bạn có muốn đặt lại tất cả các câu hỏi đã học không, sau khi đặt lại không thể khôi phục!',
            [
                { text: 'Đồng ý', onPress: () => this.props.dispatch({ type: 'reset-learn' }) },
                { text: 'Hủy bỏ', style: 'cancel' },
            ],
            { cancelable: false },
        )
    }

    GoPro = () => {
        Alert.alert(
            'Trở thành người dùng Pro',
            'Bạn có muốn trả một khoản phí nhỏ để mở khóa chức năng nâng cao và chặn quảng cáo không?',
            [
                { text: 'Đồng ý' },
                { text: 'Hủy bỏ', style: 'cancel' },
            ],
            { cancelable: false },
        )
    }

    render() {
        const { navigation } = this.props;
        return (

            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: "#66BB6A"
                    },
                }}>


                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Ôn thi giấy phép lái xe",
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => navigation.openDrawer()}
                            >
                                <Icon style={{ marginLeft: 10, color: 'white' }} size={30} name='menu' />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={this.GoPro}
                            >
                                <Icon style={{ marginRight: 10, color: 'white' }} size={40} name='professional-hexagon' />
                            </TouchableOpacity>
                        )
                    }}

                />

                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: "Ôn thi giấy phép lái xe adhakjd",
                    }}
                />

                <Stack.Screen
                    name="Man"
                    component={Man}
                />

                <Stack.Screen
                    name="test"
                    component={test}
                />

                <Stack.Screen
                    name="Thi_sat_hach"
                    component={Thi_sat_hach}
                    options={{
                        title: "Thi sát hạch",
                    }}
                />

                <Stack.Screen
                    name="Hoc_li_thuyet"
                    component={Hoc_li_thuyet}
                    options={{
                        title: "Học lí thuyết",
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={this.Reset}>
                                <Image
                                    source={require("../images/reset.jpg")}
                                    style={{ width: 30, height: 30, marginRight: 15 }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen
                    name="Bien_bao"
                    component={Bien_bao}
                    options={{
                        title: "Biển báo giao thông",
                    }}
                />

                <Stack.Screen
                    name="Tra_cuu_luat"
                    component={Tra_cuu_luat}
                    options={{
                        title: "Tra cứu luật",
                    }}
                />

                <Stack.Screen
                    name="Meo_thi"
                    component={Meo_thi}
                    options={{
                        title: "Mẹo thi kết quả cao",
                    }}
                />

                <Stack.Screen
                    name="Animated"
                    component={Anima}
                />

                <Stack.Screen
                    name="Khai_niem"
                    component={Khai_niem}
                />

                <Stack.Screen
                    name="Help"
                    component={Help}
                    options={{
                        title: "Hướng dẫn sử dụng"
                    }}
                />

                <Stack.Screen
                    name="SearchLawDetail"
                    component={SearchLawDetail}
                    options={{
                        title: "Luật giao thông"
                    }}
                />

            </Stack.Navigator>

        )
    }
}

export default connect()(StackScreen);