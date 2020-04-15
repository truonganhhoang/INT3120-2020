import React, { Component } from 'react';

import {
    Text, Content,
    Card, CardItem, Body,
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../Component/Style';
import { color } from '../Component/color';

const CardComponent = (props) => {

    const { title, icon } = props.data;
    const { navigation } = props;


    return (
        <Card >
            <CardItem style={styles.buttonCard}>
                <Body style={{alignItems: 'center'}}>
                    <FontAwesome5Icon name={icon} style={{ fontSize: 50, color: color.textButton,marginBottom:4 }} solid />
                    <Text style={{ fontSize: 20, color: color.textButton }}>{title}
                    </Text>
                </Body>
            </CardItem>
        </Card>
    );
}
export default CardComponent;