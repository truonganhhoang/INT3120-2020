import React, { Component } from 'react'
import Thongbao from '../components/Thongbao'
import { Header, Body, Title, Container, Content } from 'native-base'
import FooterScreen from '../components/Footer';
export default class Screen4 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Thông báo</Title>
                    </Body>
                </Header>
                <Content>
                    <Thongbao />
                </Content>
                {/* <FooterScreen
                active4={true}
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
