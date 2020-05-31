import React, { useState } from 'react';
import {
  Container, 
  Body, 
  Left,
  Text,
  Thumbnail,
  Content,
  List, ListItem
} from 'native-base';
import { styles } from '../Component/Style.js';
import { data } from '../data/dataTrafficSign';
import MyHeader from '../itemComponent/Header';

const ListTrafficSigns = (props) => {
  const { navigation, route } = props;
  const { itemId, mainId } = route.params;
  const initState = {
    showed: false,
    idState: null
  }
  const [state, setState] = useState(initState);
  return (
    <Container>
      <MyHeader title="Biển báo giao thông" itemId={itemId} mainId={mainId} navigation={navigation} />
      <Content>
        <List>
          {
            data.map((item) => {
              const { type, body } = item;
              let divider = <ListItem itemDivider style={{ fontWeight: "bold" }}>
                <Text>{type}</Text>
              </ListItem>
              let dataBody = body.map((sub_item) => {
                const { id, title, img_link, content } = sub_item;
                // setState((state)=> state.id = id);
                return <ListItem thumbnail 
                  onPress={()=>setState({
                    showed: state.showed && state.idState == id ? false : true,
                    idState: id,
                  })
                  }
                  style={styles.borderbottom}>
                  <Left>
                    <Thumbnail square source={{ uri: img_link }} resizeMode='center' />
                  </Left>
                  <Body style={{ borderBottomWidth: 0 }}>
                    <Text style={styles.titleId}>{id}</Text>
                    <Text style={styles.primaryText}>{title}</Text>
                    <Text style={styles.subText}>{
                      state.showed && state.idState == id ? content : null
                    }</Text>
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
export default ListTrafficSigns;