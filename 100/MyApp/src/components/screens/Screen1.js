import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';
// import Header from '../components/Header';
import SliderHome from '../components/SliderHome';
import { Styles } from '../../styles';
import Provideo from '../components/Provideo';
import { createStackNavigator } from '@react-navigation/stack';
import Details1 from './Details1';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import Search from './Search';
import MyCourses from './MyCourses';
import { useScrollToTop } from '@react-navigation/native';
import HeaderScreen1 from '../components/HeaderScreen1';

export default class Screen1 extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {navigation} = this.props;
        return (
            <Container >
                <ScrollView showsHorizontalScrollIndicator={false} ref={this.props.scrollRef}>
                    <HeaderScreen1 onPress1= {()=> navigation.navigate('Search')}
                            onPress2= {()=> navigation.navigate('MyCourses')}
                    />
                    <SliderHome />
                    <Content>
                        <View style={Styles.container}>
                            <Text style={[Styles.h2text, {marginTop: 4, marginBottom: 8}]}>Khuyến mại</Text>
                            <Provideo toDetail={()=> navigation.navigate('Details1')} />
                            <Text style={[Styles.h2text, {marginTop: 4, marginBottom: 8}]}>Top bán chạy</Text>
                            <Provideo toDetail={()=> navigation.navigate('Details1')}/>
                            <Text style={[Styles.h2text, {marginTop: 4, marginBottom: 8}]}>Đánh giá cao</Text>
                            <Provideo toDetail={()=> navigation.navigate('Details1')}/>
                            <Text style={[Styles.h2text, {marginTop: 4, marginBottom: 8}]}>Mới nhất</Text>
                            <Provideo />
                        </View>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
// function Stores(props) {
//     const ref = React.useRef(null);
  
//     useScrollToTop(ref);
  
//     return <Store {...props} scrollRef={ref} />;
//   }
// const Stack = createStackNavigator();

// export default function Screen1() {
//     return (
//     <Stack.Navigator>
//         <Stack.Screen name="Store" component={Stores}
//          options={{
//             header: ()=> null
//           }}
//         />
//         <Stack.Screen name="Details" component={Details1}
//         options={{
//             title: 'Chi tiết ',
//             headerStyle:{
//                 height: 60,
//                 backgroundColor: "#0288D1",
//             },
//             headerTitleStyle:{
//                 color: "#E1F4FE"
//             }
//           }}
//         />
//         <Stack.Screen name="Search" component={Search} 
//          options={{
//             // title: 'Tìm kiếm',
//             headerStyle:{
//                 height: 60,
//                 backgroundColor: "#0288D1",
//             },
//             headerTintColor: "#E1F4FE",
//         }}
//         />
//          <Stack.Screen name="Mycourses" component={Mycourses} 
//          options={{
//             title: 'Khóa học của bạn',
//             headerStyle:{
//                 height: 60,
//                 backgroundColor: "#0288D1",
//             },
//             headerTintColor: "#E1F4FE",
//         }}
//         />
//     </Stack.Navigator>
//     );
// }