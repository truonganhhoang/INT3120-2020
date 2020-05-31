import React from 'react';
import { 
    Container,
    Content,
    Text,
    H3,
    ListItem,
    Spinner,
    Body
} from 'native-base';
import { styles } from '../Component/Style.js';
import MyHeader from '../itemComponent/Header';
import { dataTypeQuestion } from '../data/TypeQuestion';

const ReviewQuestion = (props) => {
    
    const { navigation,route } = props;
    const { itemId,mainId } = route.params;

    return (
        <Container>
            <MyHeader title="Ôn tập câu hỏi" itemId={itemId} mainId={mainId} navigation={navigation} />
            <Content>
                {
                    dataTypeQuestion==undefined ? <Spinner style={{marginTop: 200}}/> : dataTypeQuestion.map((item) => {
                        const {id, type, name, description} = item;
                        return <ListItem 
                        //onPress={}
                        key={id}>
                            <Body>
                                <H3 style={styles.Heading}>{name}</H3>
                                <Text style={styles.subText}>{description}</Text>
                            </Body>
                        </ListItem>
                    })
                }
            </Content>
        </Container>
    );
}
export default ReviewQuestion;