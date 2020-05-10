import React, {useState} from 'react';
import { 
    Body, 
    Button, 
    Container, 
    Header, 
    Left, 
    Right, 
    ScrollableTab, 
    Tab, 
    Tabs, 
    Text, 
    Title,
    Drawer,
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';

import { color } from '../Component/color';
import { styles } from '../Component/Style.js';
import InitQuestion from '../itemComponent/InitQuestion';
import SideBar from '../itemComponent/SideBar';
import Clock from '../itemComponent/Clock';
import ModalEndExam from '../itemComponent/ModalEndExam';
// import modalReducer from '../reactRedux/modalReducer';



const initExam = (props) => {
    const { navigation, route } = props;
    const { mainId,itemId,positionExam } = route.params;
    const isVisiable = useSelector(state => ({...state.modalReducer}));
    console.log(isVisiable);
    const [drawer, setDrawer] = useState();

    const closeDrawer = () => {
        drawer._root.close();
    };
    const openDrawer = () => { 
        drawer._root.open();
    };

    const dispatch = useDispatch();

    function openModal() {
        dispatch({
            type: "OPEN_MODAL"
        })
    }
    
    return (
        <Drawer 
        ref={(ref) => setDrawer(ref)} 
        content={<SideBar navigator={navigator} data = {data} />} 
        onClose={closeDrawer} 
        >
            <Container>
                <Header style={styles.header} hasTabs>
                    <Left>
                        <Button 
                        onPress={openDrawer}
                        transparent>
                            <FontAwesome5Icon name="bars" style={{fontSize: 20, color: color.textButton}} solid/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Đề thi số {positionExam}</Title>
                    </Body>
                    <Right >
                        <Clock />
                        <Button success transparent 
                        onPress = {() => openModal}
                        style={{alignItems: 'center'}}>
                            <FontAwesome5Icon name="check-double" 
                            style={{fontSize: 20, color: color.textButton}} solid/>
                            {/* <Text style={{color: color.textButton}}>Nộp bài</Text> */}
                        
                        </Button>
                    </Right>
                </Header>
                <Tabs 
                tabBarBackgroundColor={color.header}
                tabContainerStyle={{flex: 1}}
                renderTabBar={()=> <ScrollableTab />}
                >
                    {
                        data == undefined ? <Spinner style={{marginTop: 200}}/> : data.map((item) => {
                            const { question, questionContent, answers } = item;
                            return (
                                <Tab heading={question} 
                                tabStyle={{backgroundColor: color.header }}
                                activeTabStyle={{backgroundColor: color.header }}>
                                    <InitQuestion questionContent={questionContent} answers={answers} />
                                </Tab>
                            );
                        })
                    }
                </Tabs>
                <ModalEndExam setVisiable ={isVisiable} />
            </Container>
            
        </Drawer>
    );
}

const data = [
    {
        question: "Câu 1",
        questionContent: "noi dung cau 1",
        answers: [
            {
                id: 1,
                answer: "1. dap an 1",
                pass: true,
            },
            {
                id: 2,
                answer: "2. dap an 2",
                pass: true,
            },
            {
                id: 3,
                answer: "3. dap an 3",
                pass: false,
            },
        ],
        status: null,
    },
    {
        question: "Câu 2",
        questionContent: "noi dung cau 2",
        answers: [
            {
                id: 4,
                answer: "1. dap an 1",
                pass: true,
            },
            {
                id: 5,
                answer: "2. dap an 2",
                pass: true,
            },
            {
                id: 6,
                answer: "3. dap an 3",
                pass: false,
            },
        ],
        status: null,
    },
    {
        question: "Câu 3",
        questionContent: "noi dung cau 3",
        answers: [
            {
                id: 7,
                answer: "1. dap an 1",
                pass: true,
            },
            {
                id: 8,
                answer: "2. dap an 2",
                pass: false,
            },
            {
                id: 9,
                answer: "3. dap an 3",
                pass: false,
            },
        ],
        status: null,
    },
    {
        question: "Câu 4",
        questionContent: "noi dung cau 4",
        answers: [
            {
                id: 10,
                answer: "1. dap an 1",
                pass: true,
            },
            {
                id: 11,
                answer: "2. dap an 2",
                pass: false,
            },
            {
                id: 12,
                answer: "3. dap an 3",
                pass: false,
            },
        ],
        status: null,
    },
];
export default initExam;