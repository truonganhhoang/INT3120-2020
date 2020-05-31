import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    H2,
    H3,
    Spinner,
} from 'native-base';
import MyHeader from '../itemComponent/Header';
import { dataSaHinh } from '../data/SaHinh';

const SaHinh = (props) => {
    const { navigation,route } = props;
    const { itemId,mainId } = route.params;

    const {video, data } = dataSaHinh;

    return (
        <Container>
            <MyHeader title="Các bài thi sa hình" itemId={itemId} mainId={mainId} navigation={navigation} />
            <Content>
                <List style={{padding: 8}}>
                    <H2 style={{textAlign: 'center'}}>Hướng dẫn 11 bài thi sa hình</H2>
                    <TouchableWithoutFeedback>
                        <H3>{video}</H3>
                    </TouchableWithoutFeedback>
                    {        
                        data==undefined ? <Spinner style={{flex:1}}/> : 
                        data.map(it => {
                            const {id, name, steps, requires, mistakes} = it;
                            return (<>
                                <ListItem noBorder style={{fontWeight: 'bold', opacity: 0.83}}>
                                    <H2>Bài {id}: {name}</H2>
                                </ListItem>
                                {
                                    steps.length==0 ? null : 
                                        id != 12 ? <>
                                        <ListItem noBorder style={{fontWeight: 'bold', opacity: 0.66}}>
                                            <H3>Các Bước Thực Hiện Bài Thi Sát Hạch {name}</H3>
                                        </ListItem>
                                        {
                                            steps.map(step => <ListItem><Text>{step}</Text></ListItem>)
                                        }
                                        </> : <>
                                        <ListItem noBorder style={{fontWeight: 'bold', opacity: 0.66}}>
                                            <H3>Bài phụ: {name}</H3>
                                        </ListItem>
                                        {
                                            steps.map((step, index) => {
                                                if(index <1 && index >3) 
                                                    return <Text>{step}</Text>
                                                else 
                                                    return <Text style={{paddingLeft: 8}}>{`\u2022  ${step}`}</Text>
                                            })
                                        }
                                        </>
                                }
                                {
                                    requires.length==0 ? null : <>
                                    <ListItem noBorder style={{fontWeight: 'bold', opacity: 0.66}}>
                                        <H3>Yêu Cầu Cần Đạt Được Ở Bài Thi Sát Hạch Số {id} Này</H3>
                                    </ListItem>
                                    {
                                        requires.map(require => <ListItem><Text>{require}</Text></ListItem>)
                                    }
                                    </>
                                }
                                {
                                    mistakes.length==0 ? null : <>
                                    <ListItem noBorder style={{fontWeight: 'bold', opacity: 0.66}}>
                                        <H3>Các lỗi bị trừ điểm ở bài thi {name}</H3>
                                    </ListItem>
                                    {
                                        mistakes.map(mistake => <ListItem><Text>{mistake}</Text></ListItem>)
                                    }
                                    </>
                                }
                            </>);
                        })
                    }
                    
                </List>
            </Content>
        </Container>
    );
}

export default SaHinh;