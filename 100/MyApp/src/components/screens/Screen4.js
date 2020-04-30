import React, { Component } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { Styles } from '../../styles'
import Thongbao from '../components/Thongbao'
import { Header, Body, Title, Container } from 'native-base'
export default class Screen4 extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Thông báo</Title>
                    </Body>
                </Header>
                <View style={Styles.container}>
                    <ScrollView>
                        <Thongbao />
                    </ScrollView>
                </View>
            </Container>
        )
    }
}
