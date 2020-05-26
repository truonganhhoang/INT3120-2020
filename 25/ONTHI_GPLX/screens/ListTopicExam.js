import React, { useState, useEffect } from 'react';
import { 
    Container, Header, 
    Body, Right,
    Title, Text,
    Button, 
    Card, CardItem, Left, 
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../Component/Style';
import { color } from '../Component/color'
import { ScrollView,View } from 'react-native';
import MyHeader from '../itemComponent/Header';

const ListTopicExam = (props) => {

    const { navigation,route } = props;
    const { itemId,mainId } = route.params;


    return (
        <Container style={styles.container}>
            <MyHeader title="Danh sách đề thi" itemId={itemId} mainId={mainId} navigation={navigation} />
            <ScrollView style={{backgroundColor: color.containerColor,}}>
                <View style={{
                    paddingTop: 4,
                    paddingLeft: 6,
                    flex: 1, 
                    flexWrap: 'wrap',
                    flexDirection: 'row'
                }} 
                >
                {
                    data.map((item)=> {
                        return <Card transparent>
                                    <CardItem 
                                    style={styles.CardExam}
                                    button
                                    onPress = {() => navigation.navigate("initExam",
                                        {
                                            itemId: itemId,
                                            mainId: mainId,
                                            positionExam: item.key_id,
                                        }
                                    )}
                                    >
                                        <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 17}}>Đề thi số </Text>
                                            <Text style={{fontSize: 17}}>{item.name}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                    })
                }
                </View>
            </ScrollView>
        </Container>
    );
}

const data = [
    {
        key_id: "1",
        name: "1",
        state: null,
    },
    {
        key_id: "2",
        name: "2",
        state: null,
    },
    {
        key_id: "3",
        name: "3",
        state: null,
    },
    {
        key_id: "4",
        name: "4",
        state: null,
    },
    {
        key_id: "5",
        name: "5",
        state: null,
    },
    {
        key_id: "6",
        name: "6",
        state: null,
    },
    {
        key_id: "7",
        name: "7",
        state: null,
    },
    {
        key_id: "8",
        name: "8",
        state: null,
    },
    {
        key_id: "9",
        name: "9",
        state: null,
    },
    {
        key_id: "10",
        name: "10",
        state: null,
    },
    {
        key_id: "11",
        name: "11",
        state: null,
    },
    {
        key_id: "12",
        name: "12",
        state: null,
    },
    {
        key_id: "13",
        name: "13",
        state: null,
    },
    {
        key_id: "14",
        name: "14",
        state: null,
    },
    {
        key_id: "15",
        name: "15",
        state: null,
    },
    {
        key_id: "16",
        name: "16",
        state: null,
    },
    {
        key_id: "17",
        name: "17",
        state: null,
    },
    {
        key_id: "18",
        name: "18",
        state: null,
    },
    {
        key_id: "19",
        name: "19",
        state: null,
    },
    {
        key_id: "20",
        name: "20",
        state: null,
    },

];
export default ListTopicExam;