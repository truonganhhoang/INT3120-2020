import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import styles from "./styles";

class PresentSimple extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{color:"white", fontWeight: "bold", fontSize: 20, marginLeft: -75}}>Thì hiện tại đơn</Text>
          </Body>
        </Header>

        <Content padder>
            <Text>
            1. Công thức {'\n'}
                {'\t'}- VỚI ĐỘNG TỪ THƯỜNG:{'\n'}
                {'\t'}{'\t'}    + Khẳng định: S + V(s/es) + O.{'\n'}
                {'\t'}{'\t'}    + Phủ định: S + DO/DOES + NOT + V + O.{'\n'}
                {'\t'}{'\t'}    + Nghi vấn: DO/DOES + S + V + O?{'\n'}
                    {'\n'}
                {'\t'}{'\t'}    - Chú ý:{'\n'}
                {'\t'}{'\t'}{'\t'}        I, We, You, They + V (nguyên thể){'\n'}
                {'\t'}{'\t'}{'\t'}        I, We, You, They + DO{'\n'}
                {'\t'}{'\t'}{'\t'}        He, She, It + V(s/es){'\n'}
                {'\t'}{'\t'}{'\t'}        He, She, It + DOES{'\n'}
                {'\t'}{'\t'}{'\t'}        (Ta thêm "es" sau các động từ tận cùng là: o, s, x, ch, sh){'\n'}
                {'\t'}- VỚI ĐỘNG TỪ TOBE:{'\n'}
                {'\t'}{'\t'}    + Khẳng định: S + AM/IS/ARE + O.{'\n'}
                {'\t'}{'\t'}    + Phủ định: S + AM/IS/ARE + NOT + O.{'\n'}
                {'\t'}{'\t'}    + Nghi vấn: AM/IS/ARE + S + O.{'\n'}
                    {'\n'}
                {'\t'}{'\t'}    + Chú ý:{'\n'}
                {'\t'}{'\t'}{'\t'}        I + am{'\n'}
                {'\t'}{'\t'}{'\t'}        We, You, They + are{'\n'}
                {'\t'}{'\t'}{'\t'}        He, She, It + is{'\n'}
                {'\t'}   Chú thích: S - Chủ ngữ, V - Động từ, O - Tân ngữ.{'\n'}
            2. Cách dùng{'\n'}
                {'\t'}- Thì hiện tại đơn diễn tả một chân lý, một sự thật hiển nhiên.{'\n'}
                {'\t'}{'\t'}    Ví dụ:{'\n'}
                {'\t'}{'\t'}    - The sun rises in the East.{'\n'}
                {'\t'}{'\t'}    (Mặt trời mọc ở đằng đông){'\n'}
                {'\t'}{'\t'}    - Tom comes from England.{'\n'}
                {'\t'}{'\t'}    (Tom đến từ nước Anh){'\n'}
                {'\t'}- Thì hiện tại đơn diễn tả một thói quen, một hành động xảy ra thường xuyên ở hiện tại{'\n'}
                {'\t'}{'\t'}    Ví dụ:{'\n'}
            </Text>
        </Content>
      </Container>
    );
  }
}

export default PresentSimple;

