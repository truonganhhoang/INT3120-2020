import React from 'react';
import { Modal } from 'react-native-modal';
import {Card, Text, CardItem, Body, Button} from 'native-base';
import { Provider, useSelector, useDispatch } from 'react-redux';

const ModalEndExam = (props) => {
    const {setVisiable} = props;

    const dispatch = useDispatch();
    function closeModal() {
        dispatch({
            type: "CLOSE_MODAL"
        })
    }
    return (
        <Modal isVisible={setVisiable}>
            <Card>
                <CardItem>
                    <Body>
                        <Text>Kết thúc bài thi?</Text>
                    </Body>
                </CardItem>
                <CardItem footer style={{flex: 1, alignContent: 'flex-end'}}>
                    <Button style={{ margin: 2}}>
                        <Text>Hủy</Text>
                    </Button>
                    <Button
                    onPress = {closeModal}
                    style={{ margin: 2}}>
                        <Text>Kết thúc</Text>
                    </Button>
                    
                </CardItem>
            </Card>
        </Modal>
    );
}

export default ModalEndExam;