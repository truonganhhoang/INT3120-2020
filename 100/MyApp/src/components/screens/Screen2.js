import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useScrollToTop } from '@react-navigation/native'
import { Container, Header, Left, Body, Title, Right, Content, List, ListItem, Icon, Text } from 'native-base'
import FooterScreen from '../components/Footer';
export default function Screen2({navigation}) {
    const [danhmuc, setdanhmuc] = useState([
        {danhmuc: "Ngoại ngữ", key: "1"},
        {danhmuc: "Marketing", key: "2"},
        {danhmuc: "Kinh doanh- khởi nghiệp", key: "3"},
        {danhmuc: "Phát triển cá nhân", key: "4"},
        {danhmuc: "Tin học văn phòng", key: "5"},
        {danhmuc: "Thiết kế", key: "6"},
        {danhmuc: "Multimedia", key: "7"},
        {danhmuc: "Công nghệ thông tin", key: "8"},
        {danhmuc: "Kiến thức chuyên", key: "9"},
        {danhmuc: "Thể thao- sức khỏe", key: "10"},
        {danhmuc: "Âm nhạc", key: "11"},
        {danhmuc: "Nghệ thuật-đời sống", key: "12"},
        {danhmuc: "Hôn nhân- gia đình", key: "13"},
        {danhmuc: "Nuôi dạy con", key: "14"},
        {danhmuc: "Phong thủy", key: "15"},
    ])
    const ref = React.useRef(null);

    useScrollToTop(ref);
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Danh mục</Title>
                </Body>
            </Header>
            <ScrollView ref={ref}>
                <Content>
                    <List ref={ref}>
                        {danhmuc.map( (value) =>(
                            <ListItem key={value.key} button onPress={()=>{ navigation.navigate('FilterCourses', {key: value.key, title: value.danhmuc})}}>
                                <Left>
                                    <Text>{value.danhmuc}</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </ScrollView>
            {/* <FooterScreen
                active2={true}
                Go3={()=> navigation.navigate('Screen3')}
                Go1={()=> navigation.navigate('Screen1')}
                Go2={()=> navigation.navigate('Screen2')}
                Go4={()=> navigation.navigate('Screen4')}
                Go5={()=> navigation.navigate('Screen5')}
                /> */}
        </Container>
    )
}