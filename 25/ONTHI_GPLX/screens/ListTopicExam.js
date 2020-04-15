import React, { Component } from 'react';
import { 
    Container, Header, 
    Body, Right,
    Title, Text,
    Button, 
    Content, Left, 
    Card, CardItem
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../Component/Style.js';

const ListTopicExam = (props) => {

    const { navigation,route } = props;
    const { itemId,mainId } = route.params;
    return (
        <Container style={styles.container}>
            <Header style={styles.header}>
            <Left>
                <Button transparent
                onPress={() => navigation.navigate("ListComponent", {
                    itemId: itemId,
                    mainId: mainId
                })}
                >
                <FontAwesome5Icon name="arrow-left" style={{fontSize: 20, color: 'white'}} solid/>
                </Button>
            </Left>
            <Body style={styles.body}>
                <Title>Danh sách đề thi</Title>
            </Body>
            <Right>
            <Button transparent>
                <FontAwesome5Icon name="bars" style={{fontSize: 20, color: 'white'}} solid/>
            </Button>
            </Right>
            </Header>
            <Content>
                <Text>Danh sách đề thi chưa được cập nhật!</Text>
            </Content>
        </Container>
    );
}
export default ListTopicExam;