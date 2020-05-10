import React, { Component } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import {
    Container, Header,
    Body, Right,
    Title,
    Button,
} from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../Component/Style.js';
import CardComponent from '../itemComponent/CardComponent';
import { Card_item } from '../data/CardItem';
import { color } from '../Component/color';


const ListComponent = (props) => {
    const onPress = (key_id) => {
        const { navigation, route } = props;
        const { mainId } = route.params;
        if (key_id == "randomExam") {
            alert(key_id);
        }
        if (key_id == "ListExam") {
            navigation.navigate("ListTopicExam", {
                itemId: key_id,
                mainId: mainId
            });
        }
        if (key_id == "CheckFalseQuestion") {
            alert(key_id);
        }
        if (key_id == "ReviewQuestion") {
            alert(key_id);
        }
        if (key_id == "TrafficSigns") {
            navigation.navigate("ListTrafficSigns", {
                itemId: key_id,
                mainId: mainId
            });

        }
        if (key_id == "TipRemembers") {
            navigation.navigate("TipRemember", {
                itemId: key_id,
                mainId: mainId
            });
        }
        if (key_id == "PracticeExam") {
            alert(key_id);
        }
        if (key_id == "Top50Fail") {
            alert(key_id);
        }
    }
    const { route, navigation } = props;
    const { mainId } = route.params;

    return (
        <Container style={styles.container}>
            <Header style={styles.header}>
                <Body>
                    <Title style={{fontSize: 20, marginLeft: 10}}>Ôn thi giấy phép {mainId}</Title>
                </Body>
                <Right>
                    <Button transparent
                        onPress={() => navigation.navigate("Home", {
                            mainId: mainId
                        })}
                    >
                        <FontAwesome5Icon name="cog" style={{ fontSize: 30, color: color.textButton }} solid />
                    </Button>
                </Right>
            </Header>

            <Grid style={styles.body}>
                <Col style={{ marginRight: 10 }}>
                    {
                        Card_item.map((item, index) => {
                            const key_id = item.key_id;
                            if (index % 2 == 0) {

                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            onPress(key_id)
                                        }}
                                    >
                                        <CardComponent data={item} navigation={navigation}
                                            style={{marginBottom: 10}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                        })
                    }
                </Col>
                <Col>
                    {
                        Card_item.map((item, index) => {
                            const key_id = item.key_id;
                            if (index % 2 == 1) {

                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            onPress(key_id)
                                        }}
                                    >
                                        <CardComponent data={item} navigation={navigation} />
                                    </TouchableOpacity>
                                )
                            }
                        })
                    }
                </Col>

            </Grid>

        </Container>
    );
}
export default ListComponent;