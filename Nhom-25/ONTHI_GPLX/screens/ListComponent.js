import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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
    onPress = (key_id) => {
        const { navigation,route } = this.props;
        const {mainId} = route.params;
        if(key_id == 1) {
            alert(key_id);
        }
        if(key_id == 2) {
            navigation.navigate("ListTopicExam", {
                itemId: key_id,
                mainId: mainId
            });
        }
        if(key_id == 3) {
            alert(key_id);
        }
        if(key_id == 4) {
            alert(key_id);
        }
        if(key_id == 5) {
            navigation.navigate("ListTrafficSigns", {
                itemId: key_id,
                mainId: mainId
            });
            
        }
        if(key_id == 6) { 
            alert(key_id);
        }
        if(key_id == 7) {
            alert(key_id);
        }
        if(key_id == 8) {
            alert(key_id);
        }
    }
    render() {
        const { route, navigation } = this.props;
        const { mainId } = route.params;
        return (
            <Container>
                <Header>
                    <Body>
                        <Title style={styles.margin}>Ôn thi giấy phép {mainId}</Title>
                    </Body>
                    <Right>
                        <Button transparent
                            onPress={() => navigation.navigate("Home", {
                                mainId: mainId
                            })}
                        >
                            <FontAwesome5Icon name="cog" style={{fontSize: 30, color: 'white'}} solid />
                        </Button>
                    </Right>
                </Header>
                <Grid style={{margin: 10}}>
                    <Col style ={{marginRight: 8}}>
                    {
                        Card_item.map((item) => {
                            if(item.key_id%2 == 1) {
                                return (
                                    <TouchableOpacity 
                                    onPress={() => {
                                        this.onPress(item.key_id);
                                    }} 
                                    >
                                        <CardComponent data={item} navigation = {navigation} />
                                    </TouchableOpacity>
                                )
                            }
                        })
                    }
                    </Col>
                    <Col>
                    {
                        Card_item.map((item) => {
                            if(item.key_id%2 == 0) {
                                return (
                                    <TouchableOpacity 
                                    onPress={() => {
                                        this.onPress(item.key_id);
                                    }} 
                                    >
                                        <CardComponent data={item} />
                                    </TouchableOpacity>
                                );
                                    
                            }
                        })
                    }
                    </Col>
                    
                </Grid>
            </Container>
        );
    }
}
