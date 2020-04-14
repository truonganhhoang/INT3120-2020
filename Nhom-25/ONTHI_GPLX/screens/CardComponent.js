import React, { Component } from 'react';
import {
    Text, Content,
    Card, CardItem,
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class CardComponent extends Component {
    render() {
        const { title, icon, color, key_id } = this.props.data;
        const { navigation } = this.props;


        return (
            <Card style={{ backgroundColor: color, alignItems: "center", marginBottom: 10 }}>
                <CardItem style={{ backgroundColor: color }}>
                    <FontAwesome5Icon name={icon} style={{ fontSize: 50, color: "white" }} solid />
                </CardItem>
                <CardItem style={{ backgroundColor: color }}>
                    <Text style={{ fontSize: 20, color: "white" }}>{title}
                    </Text>
                </CardItem>
            </Card>
        );
    }
}