import React from 'react';
import {
    Container, Header,
    Left, Body, Right,
    Button, Icon, Title, Subtitle,
    Content, List, ListItem, Text,
    H1, H3
} from 'native-base';
import { styles } from '../Component/Style.js';
import { data } from '../data/DanhsachBang.js';
import Item from '../itemComponent/ItemComponent';


const Home = (props) => {
    const { navigation } = props;
    return (
        <Container style={styles.container}>
            <Header style={styles.header}>
                <Body style={styles.body}>
                    <Title style={{fontSize: 20, marginLeft: 10}}>Chọn bằng lái xe ôn thi</Title>
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
export default Home;