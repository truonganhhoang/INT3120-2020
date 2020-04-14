import React, { Component } from 'react';
import { 
    Container, Header, 
    Body, Left,
    Title,Text,Icon, 
    Button, Thumbnail,
    Content, 
    List, ListItem
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { data } from '../data/dataTrafficSign';
export default class ListTrafficSigns extends Component {
  render() {
    const { navigation,route } = this.props;
    const { itemId,mainId } = route.params;
    return (
      <Container>
        <Header style={{ backgroundColor: "#1E90FF"}}>
          <Left>
            <Button transparent
              onPress={() => navigation.navigate("ListComponent", {
                itemId: itemId,
                mainId: mainId
              })}
            >
              <FontAwesome5Icon name="arrow-left" style={{fontSize: 20, color: 'white'}} solid/>
            </Button>
          </Left>
          <Body>
            <Title>Biển báo giao thông</Title>
          </Body>
        </Header>
        <Content>
          <List>
            {
              data.map((item)=> {
                const { type, body } = item;
                let divider = <ListItem itemDivider style={{fontWeight: "bold"}}>
                  <Text>{type}</Text>
                </ListItem>
                let dataBody = body.map((sub_item)=> {
                  const { id, title, img_link, content } = sub_item;
                  return <ListItem thumbnail style={{borderBottomWidth: 1, borderColor: "#d0d0d0"}}>
                    <Left >
                      <Thumbnail square source={{ uri: img_link }} />
                    </Left>
                    <Body style={{borderBottomWidth: 0}}>
                      <Text style={{fontSize: 17, color: "#0000CD"}}>{id}</Text>
                      <Text style={{fontSize: 17, fontWeight: "bold"}}>{title}</Text>
                      <Text style={{fontSize: 13, color:"#696969"}}>{content}</Text>
                    </Body>
                  </ListItem>
                })
                return (
                  <>
                    {divider}
                    {dataBody}
                  </>
                );
              })
            }
          </List>
        </Content>
      </Container>
    );
  }
}