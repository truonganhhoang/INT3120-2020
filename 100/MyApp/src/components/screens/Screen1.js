import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import SliderHome from '../components/SliderHome';
import { Styles } from '../../styles';
import Provideo from '../components/Provideo';
import { createStackNavigator } from '@react-navigation/stack';
import Details1 from './Details1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Search from './Search';
import Mycourses from './Mycourses';
import { useScrollToTop } from '@react-navigation/native';

class Store extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {navigation} = this.props;
        return (
            <View >
                <ScrollView showsHorizontalScrollIndicator={false} ref={this.props.scrollRef}>
                    <Header onPress1= {()=> navigation.navigate('Search')}
                            onPress2= {()=> navigation.navigate('Mycourses')}
                    />
                    <SliderHome />
                    <View style={Styles.container}>
                        <Text style={[Styles.h2text, {marginTop: 4, marginBottom: 8}]}>Khuyến mại</Text>
                        <Provideo />
                        <Text style={[Styles.h2text, {marginTop: 4, marginBottom: 8}]}>Top bán chạy</Text>
                        <Provideo />
                        <Text style={[Styles.h2text, {marginTop: 4, marginBottom: 8}]}>Đánh giá cao</Text>
                        <Provideo />
                        <Text style={[Styles.h2text, {marginTop: 4, marginBottom: 8}]}>Mới nhất</Text>
                        <Provideo />
                        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                            <View style={[Styles.vbox, {flexDirection:"column", justifyContent:"space-between"}]}>
                                <View>
                                    {/* <Image style={Styles.minimg} source={urls}/> */}
                                    <TouchableOpacity >
                                        <Text style={{color:"white"}}>Mới</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent:"space-evenly", marginTop: 3}}>
                                    <Text style={Styles.h4text}>Lorem ipsum dolor sit amet</Text>
                                    <Text>Tên tác giả</Text>
                                    <Text style={[Styles.h4text, {color: "hotpink"}]}>299.000đ</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
function Stores(props) {
    const ref = React.useRef(null);
  
    useScrollToTop(ref);
  
    return <Store {...props} scrollRef={ref} />;
  }
const Stack = createStackNavigator();

export default function Screen1() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Store" component={Stores}
         options={{
            header: ()=> null
          }}
        />
        <Stack.Screen name="Details" component={Details1}
        options={{
            title: 'Chi tiết ',
            headerStyle:{
                height: 60,
                backgroundColor: "#0288D1",
            },
            headerTitleStyle:{
                color: "#E1F4FE"
            }
          }}
        />
        <Stack.Screen name="Search" component={Search} 
         options={{
            // title: 'Tìm kiếm',
            headerStyle:{
                height: 60,
                backgroundColor: "#0288D1",
            },
            headerTintColor: "#E1F4FE",
        }}
        />
         <Stack.Screen name="Mycourses" component={Mycourses} 
         options={{
            title: 'Khóa học của bạn',
            headerStyle:{
                height: 60,
                backgroundColor: "#0288D1",
            },
            headerTintColor: "#E1F4FE",
        }}
        />
    </Stack.Navigator>
    );
}