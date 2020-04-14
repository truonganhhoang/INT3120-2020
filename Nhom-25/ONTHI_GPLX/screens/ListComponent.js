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
        if (key_id == 1) {
            alert(key_id);
        }
        if (key_id == 2) {
            navigation.navigate("ListTopicExam", {
                itemId: key_id,
                mainId: mainId
            });
        }
        if (key_id == 3) {
            alert(key_id);
        }
        if (key_id == 4) {
            alert(key_id);
        }
        if (key_id == 5) {
            navigation.navigate("ListTrafficSigns", {
                itemId: key_id,
                mainId: mainId
            });

        }
        if (key_id == 6) {
            alert(key_id);
        }
        if (key_id == 7) {
            alert(key_id);
        }
        if (key_id == 8) {
            alert(key_id);
        }
    }
    const { route, navigation } = props;
    const { mainId } = route.params;
    // const height = Dimensions.get('window').height / 6;
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
                        Card_item.map((item) => {
                            const key_id = item.key_id;
                            if (key_id % 2 == 1) {

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
                        Card_item.map((item) => {
                            const key_id = item.key_id;
                            if (key_id % 2 == 0) {

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