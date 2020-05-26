import React from 'react';
import Modal from 'react-native-modal';
import { Text, View} from 'react-native';
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

import { color } from '../Component/color';

const ModalEndExam = () => {
    const {isVisiable} = useSelector(state => ({...state.modalReducer}));
    const dispatch = useDispatch();
    function onCloseModal() {
        dispatch({
            type: "CLOSE_MODAL"
        })
    }
    return (
        <Modal isVisible={isVisiable}>
            <View style={{backgroundColor: 'white', padding: 16, height: 130, borderRadius: 3}}>
                <View style={{marginBottom: 16}}>
                    <Text style={{ fontSize: 15}}>Kết thúc bài thi?</Text>
                    <Text style={{ fontSize: 13, color: 'black', opacity: 0.83}}>Bài thi sẽ được kết thúc và được chấm điểm</Text>
                </View>  
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', padding: 4}}>
                    <Button transparent
                    onPress = {onCloseModal}
                    style={{ padding: 4, marginRight: 4}}>
                        <Text style={{ color: 'black', opacity: 0.83}}>Hủy</Text>
                    </Button>
                    <Button style={{ padding: 4, backgroundColor: 'green', borderRadius: 3}}
                    // onPress={}
                    >
                        <Text style={{ color: 'white'}}>Kết thúc</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default ModalEndExam;