import React from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Title,
    Button,
    Content,
    Text,
} from 'native-base';

import WebView from 'react-native-webview';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../Component/Style.js';

const TipRemember = (props) => {
    const {route, navigation} = props;
    const {itemId, mainId} = route;
    const uri = "../data/TipRemembers.pdf";
    return (
        <Container>
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
                    <Title style={{ fontSize: 20, marginLeft: 10 }}>Mẹo ghi nhớ</Title>
                </Body>
            </Header>
            <Content>
                <Text>
                    Tip remembers
                </Text>
            </Content>
        </Container>
            // <WebView
            // source={{ uri: "file://../data/TipRemembers.pdf" }}
            // />
        
    );

}
export default TipRemember;