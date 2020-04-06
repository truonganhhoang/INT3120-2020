import React, { Component } from 'react';
// import {View} from 'react-native';
import { 
    Container, Header, 
    Body, Right,
    Title,Text,Icon, 
    Button, 
    Content, Left, 
    Card, CardItem
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../Component/Style.js';
import CardComponent from './CardComponent';
import {Card_item} from '../data/CardItem';
export default class ListComponent extends Component {
    render() {
        const { route, navigation } = this.props;
        const { key_id } = route.params.itemId;
        return (
            <Container>
                <Header>
                    <Body>
                        <Title style={styles.margin}>Ôn thi giấy phép {key_id}</Title>
                    </Body>
                    <Right>
                        <Button transparent
                            onPress={(key_id) => navigation.navigate("Home", {
                                itemId: {key_id}
                            })}
                        >
                            <FontAwesome5Icon name="cog" style={{fontSize: 30, color: 'white'}} solid />
                        </Button>
                    </Right>
                </Header>
                <Content style={{margin: 10}}>
                    {
                        Card_item.map((item) => {
                            return <CardComponent data={item} />
                        })
                    }
                </Content>
            </Container>
        );
    }
}
