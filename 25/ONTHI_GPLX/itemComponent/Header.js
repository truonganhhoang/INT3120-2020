import React from 'react';
import {
    Header,
    Content,
    Body,
    Text,
    Left,
    Title,
    Button
} from 'native-base';
import { styles } from '../Component/Style.js';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const MyHeader = (props) => {
    const { navigation,itemId,mainId,title } = props;
    
    return (
        <Header style={styles.header}>
            <Left>
                <Button transparent
                    onPress={() => navigation.navigate("ListComponent", {
                        itemId: itemId,
                        mainId: mainId
                    })}
                >
                    <FontAwesome5Icon name="arrow-left" style={{ fontSize: 20, color: 'white' }} solid />
                </Button>
            </Left>
            <Body>
                <Text style={{fontSize: 20, color: 'white'}}>{title}</Text>
            </Body>
        </Header>
    );
}
export default MyHeader;