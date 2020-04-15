import React from 'react';
import {
    Body,
    ListItem, 
    Text,
    H1,
} from 'native-base';
import { styles } from '../Component/Style.js';

const Item = (props) => {

    const { title, description, key_id, navigation } = props;
    return (
            <ListItem onPress={() => navigation.navigate('ListComponent',{
            mainId: key_id,
            }
            )}>
            <Body>
                <H1 style={styles.Heading}>{title}</H1>
                <Text style={styles.subText}>{description}</Text>
            </Body>
        </ListItem>
    )
}
export default Item;