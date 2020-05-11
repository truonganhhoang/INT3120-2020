import React from 'react';
import Modal from 'react-native-modal';
import { Text, View} from 'react-native';
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

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
            <View style={{backgroundColor: 'white', padding: 16, height: 100, borderRadius: 3}}>
                <View>
                    <Text style={{ fontSize: 15}}>Kết thúc bài thi?</Text>
                </View>  
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', padding: 4}}>
                    <Button transparent
                    onPress = {onCloseModal}
                    style={{ padding: 4, marginRight: 4}}>
                        <Text style={{ color: 'black', opacity: 0.83}}>Hủy</Text>
                    </Button>
                    <Button style={{ padding: 4, backgroundColor: 'green', borderRadius: 3}}>
                        <Text style={{ color: 'white'}}>Kết thúc</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default ModalEndExam;