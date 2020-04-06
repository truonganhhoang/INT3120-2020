import React, { Component } from 'react';
import { 
    Text, Content, 
    Card, CardItem, 
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class CardComponent extends Component {
    render() {
        const { title, icon, color, key_id } = this.props.data;
        return (
            <Card style={{backgroundColor: {color}, width: 200, alignItems: "center"}}>
            <CardItem style={{backgroundColor: {color}}}>
                    <FontAwesome5Icon name={icon} style={{fontSize: 50, color: "white"}} solid />
            </CardItem>
            <CardItem  style={{backgroundColor: {color}}}>
                <Text  style={{color: "white", fontSize: 20}}>{title}</Text>
            </CardItem>
        </Card>
        );
    }
}

const icons = {
    random: "random",
    listBoard: "clipboard-list",
    usercheck: "user-check",
    tasks: "tasks",
    trafficLight: "traffic-light",
    lightbulb: "lightbulb",

};