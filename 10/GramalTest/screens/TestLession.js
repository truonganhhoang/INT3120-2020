import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ListQuestions from '../components/ListQuestions';
import ShowQuestion from '../components/ShowQuestion';
import ShowAnswer from '../components/ShowAnswer';

export default class DoTheTest extends React.Component {
    // static navigationOptions = {
    //     title: 'Kiểm tra'
    // };

    constructor(props) {
        super(props);
        this.state = {
            listQuestions: [
                {
                    id: 1,
                    title: "Câu hỏi số 1",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 2,
                    title: "Câu hỏi số 2",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 3,
                    title: "Câu hỏi số 3",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 4,
                    title: "Câu hỏi số 3",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 5,
                    title: "Câu hỏi số 3",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 6,
                    title: "Câu hỏi số 3",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 7,
                    title: "Câu hỏi số 3",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 8,
                    title: "Câu hỏi số 3",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 9,
                    title: "Câu hỏi số 3",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                },
                {
                    id: 10,
                    title: "Câu hỏi số 3",
                    testLessionId: 1,
                    answer: [
                        { id: 1, a : 'Đáp án A'},
                        { id: 2, b : 'Đáp án B'},
                        { id: 3, c : 'Đáp án C'},
                        { id: 4, d : 'Đáp án D'}
                    ],
                    rightAnswer: 'A'
                }
            ]
        };
    }

    // render() {
    //     return (
    //         <View>
    //             <Text>Say Hi!</Text>
    //         </View>
    //     );

    // };

    render() {
        const { navigation } = this.props;
        const { listQuestions } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.showQuestion} >
                    <ShowQuestion listQuestions={listQuestions} />
                </View>
                <View style={styles.showAnswers}>
                    {/* <FlatList 
                        data={ listQuestions } 
                        renderItem={ ({ item }) => {
                            <ShowAnswers 
                                listAnswers={ item.answer }
                            />
                        }}
                        keyExtractor={item => `${item.id}`} 
                    /> */}
                    <ShowAnswer />
                </View>
                <View style={styles.heightFLastList} >
                    <FlatList data={listQuestions}
                        renderItem={({ item }) => (
                            <ListQuestions
                                listQuestions={item}
                            //onPress= 
                            />
                        )}
                        keyExtractor={item => `${item.id}`}
                        style={styles.scroll}
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        //justifyContent: 'center',
        // paddingLeft: 10,
        // paddingRight: 10,
        backgroundColor: '#f7f7f7',
    },
    scroll: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        //height: 60,
        //borderBottomColor: 'blue',
        //borderBottomWidth: 2
    },
    heightFLastList: {
        height: 60,
        backgroundColor: 'white',
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    showQuestion: {
        paddingTop: 5,
        marginLeft: 10,
        marginRight: 10
    },
    showAnswers: {
        backgroundColor: 'white',
        height: 300,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3
    }
});