import React from 'react';
import {
    Container,
    Content,
    Text,
    Spinner,
    H2,
    H3,
    ListItem
} from 'native-base';
import MyHeader from '../itemComponent/Header';
import { styles } from '../Component/Style.js';
import {dataTips} from '../data/TipRemember';
import { ScrollView } from 'react-native';

const TipRemember = (props) => {
    const {route, navigation} = props;
    const {itemId, mainId} = route.params;

    return (
        <Container>
            <MyHeader title="Mẹo ghi nhớ" itemId={itemId} navigation={navigation} mainId={mainId} />
            <Content style={{marginRight: 8}}>
                {
                    dataTips==undefined ? <Spinner style={{flex:1}}/> : dataTips.map((it, index) => {
                        const {type, item} = it;
                        return (
                            <>
                                <ListItem style={{borderBottomWidth: 0, marginTop: 4}}>
                                    <H2 style={{fontWeight: 'bold', opacity: 0.83}}>{type}</H2>
                                </ListItem>
                                {
                                    index == 4 ? 
                                        item.map(i => {
                                            const {answer, content} = i;
                                            if(answer == 1) {
                                                return <ListItem>
                                                    <Text style={{paddingLeft: 8, marginBottom: 4}}>{`\u2022  ${content}`}</Text>
                                                </ListItem>
                                            }
                                            else {
                                                return <ListItem>
                                                    <Text style={{paddingLeft: 20}}>{`\u0970  ${content}`}</Text>
                                                </ListItem>
                                            }
                                        })
                                    :
                                        item.map(i => {
                                            const {answer, content} = i;
                                            return (
                                                <>
                                                    <ListItem style={{borderBottomWidth: 0}}>
                                                        <H3 style={{fontWeight: 'bold', opacity: 0.66}}>Các câu hỏi sau chọn đáp án {answer}:</H3>
                                                    </ListItem>
                                                    {
                                                        content.map(x => <ListItem>
                                                                <Text style={{paddingLeft: 8, marginBottom: 4}}>{`\u2022  ${x}`}</Text>
                                                            </ListItem>
                                                        )
                                                    }
                                                </>
                                            );
                                        })
                                    
                                }
                            </>
                        );
                    })
                }
            </Content>
        </Container>
    );

}
export default TipRemember;