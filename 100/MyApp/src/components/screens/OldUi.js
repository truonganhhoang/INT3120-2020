import React, { Component } from 'react'
import Provideo from '../components/Provideo'
import { Container, Content, Text } from 'native-base'
import HeaderScreen1 from '../components/HeaderScreen1'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import FooterScreen from '../components/Footer'

export default class OldUi extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
            <HeaderScreen1
                    onPress1= {()=> navigation.navigate('Search')}
                    onPress2= {()=> navigation.navigate('MyCourses')}
                />
            <ScrollView>
                <Content>
                    <View style={{marginTop: 8}}>
                        {/* <TouchableOpacity
                        onPress = {()=> navigation.navigate('Login')}
                        >
                            <Text>Press</Text>
                        </TouchableOpacity> */}
                        <Provideo />
                        <Provideo />
                        <Provideo />
                        <Provideo />
                    </View>
                </Content>
            </ScrollView>
            <FooterScreen
                active1={true}
                Go3={()=> navigation.navigate('Screen3')}
                Go1={()=> navigation.navigate('Screen1')}
                Go2={()=> navigation.navigate('Screen2')}
                Go4={()=> navigation.navigate('Screen4')}
                Go5={()=> navigation.navigate('Screen5')}
                />
        </Container>
            
        )
    }
}
