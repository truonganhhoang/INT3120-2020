import React, {useState, useLayoutEffect} from 'react';
import {
    List,
    ListItem, 
    Text,
    H1,
    CheckBox,
    Body,
    Spinner,
} from 'native-base';

import {styles} from '../Component/Style';
import {color} from '../Component/color';

const InitQuestion = (props) => {
    const { question } = props;
    const { questionContent, answers } = question;

    const [answerState, setAnswerState] = useState();
    useLayoutEffect( () => {    
        setAnswerState(
            answers.map(item => {
                return {
                    select: false,
                    box_color: color.BaseCheckBox,
                    id: item.id,
                    answer: item.answer,
                    pass: item.pass,
                }
            })
        );
    }, []);

    return (
        <List>
            <ListItem>
                <H1>{questionContent}</H1>
            </ListItem>
            {
                answerState == undefined ? <Spinner style={{flex: 1}}/> : answerState.map( (item) => {
                    return <ListItem 
                            key={item.id}
                            button>
                                <CheckBox
                                color={item.box_color}
                                checked={item.select}
                                onPress={
                                    () => setAnswerState(
                                        answerState.map(data => {
                                            if(item.id == data.id) {
                                                if(!data.select) {
                                                    data.select = true;
                                                    data.box_color = color.CorrectCheckBox;
                                                }
                                                else {
                                                    data.select = false;
                                                    data.box_color = color.BaseCheckBox;
                                                }
                                            }
                                            return data;
                                        })
                                    )
                                }
                                
                                />
                                <Body>
                                    <Text>{item.answer}</Text>
                                </Body>
                            </ListItem>
                })
            }
        </List>
    );
}
export default InitQuestion;