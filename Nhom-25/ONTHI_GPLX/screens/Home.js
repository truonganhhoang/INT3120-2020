import React, { Component } from 'react';
import {
    Container, Header,
    Left, Body, Right,
    Button, Icon, Title, Subtitle,
    Content, List, ListItem, Text,
    H1, H3
} from 'native-base';
import { styles } from '../Component/Style.js';
import { data } from '../data/DanhsachBang.js';

class Item extends Component {
    render() {

        const { title, description, key_id,route, navigation } = this.props;
        return (
                <ListItem onPress={() => navigation.navigate('ListComponent',{
                    itemId: {key_id},
                    }
                    )}>
                    <Body>
                        <H1 style={styles.textHeader}>{title}</H1>
                        <Text style={styles.textContent}>{description}</Text>
                        {/* {
                            route != null ? <Text>not params</Text>: <Text>{JSON.stringify(route)}</Text>
                        } */}
                    </Body>
                </ListItem>
        )
    }
}

export default class Home extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header>
                    <Body>
                        <Title style={styles.margin}>Chọn bằng lái xe ôn thi</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        {
                            data.map(item => {
                                const {title, description, key_id} = item;
                                return <Item title={title} 
                                        description={description} 
                                        key_id={key_id}
                                        navigation = {navigation}
                                        />
                            })
                        }
                    </List>
                </Content>
            </Container>
        );
    }
}