import React, { Component } from 'react'
import Provideo from '../components/Provideo'
import { Container, Content } from 'native-base'
import HeaderScreen1 from '../components/HeaderScreen1'
import { ScrollView } from 'react-native'

export default class OldUi extends Component {
    render() {
        return (
            <Container>
            <HeaderScreen1
                    onPress1= {()=> navigation.navigate('Search')}
                    onPress2= {()=> navigation.navigate('MyCourses')}
                />
            <ScrollView>
                <Content>
                    <Provideo />
                </Content>
            </ScrollView>
            {/* <FooterScreen
                active2={true}
                Go3={()=> navigation.navigate('Screen3')}
                Go1={()=> navigation.navigate('Screen1')}
                Go2={()=> navigation.navigate('Screen2')}
                Go4={()=> navigation.navigate('Screen4')}
                Go5={()=> navigation.navigate('Screen5')}
                /> */}
        </Container>
            
        )
    }
}
