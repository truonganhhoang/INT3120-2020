import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { Question, Answer } from '../../components/Question';
import PresentQuestion from '../../components/Question';
import QuestionScreen from '../../components/QuestionScreen';

const data = [
    {
        id: '1',
        question: 'Khái niệm "phần đường xe chạy" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại.',
                correct: true,
            },
            {
                key: '2',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, dải đất dọc hai bên đường để đảm bảo an toàn giao thông.',
                correct: false,
            },
            {
                key: '3',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, các công trình, thiết bị phụ trợ khác và dải đất dọc hai bên đường để đảm bảo an toàn giao thông.',
                correct: false,
            }
        ]
    },
    {
        id: '2',
        question: '"Vạch kẻ đường" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.',
                correct: true,
            },
            {
                key: '2',
                text: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.',
                correct: false,
            },
            {
                key: '3',
                text: 'Tất cả các ý trên.',
                correct: false,
            }
        ]
    },
    {
        id: '3',
        question: '"Vạch kẻ đường" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.',
                correct: true,
            },
            {
                key: '2',
                text: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.',
                correct: false,
            },
            {
                key: '3',
                text: 'Tất cả các ý trên.',
                correct: false,
            }
        ]
    },
    {

    }
]

const { width, height } = Dimensions.get('window');

class Khai_niem extends React.Component {

    render() {
        // const {navigation} = this.props;
        // const type = navigation.getParam('type', '1')

        return (
            <FlatList
                removeClippedSubviews={true}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}

                data={this.props.KhaiNiem}

                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        // <View>
                        //     <View style={styles.top}>
                        //         <ScrollView>
                        //             <Question text={item.question} />

                        //             <FlatList
                        //                 data={item.answer}
                        //                 keyExtractor={(item, index) => index.toString()}
                        //                 renderItem={({ item, index }) => {
                        //                     return (
                        //                         <Answer number={index + 1} answer={item.text} correct={item.correct} />
                        //                     )
                        //                 }}
                        //             >
                        //             </FlatList>
                        //         </ScrollView>
                        //     </View>

                        //     <View style={styles.bot}>
                        //         <PresentQuestion
                        //             number={item.id}
                        //             total={data.length}
                        //             next={() => Alert.alert("Màn hình next")}
                        //         />
                        //     </View>

                        // </View>

                        <QuestionScreen questionNumber={index} element={item} total={this.props.KhaiNiem.length} passed={item.passed} />

                    )
                }}
            >
            </FlatList>

        );
    }
}

function mapStateToProps(state) {
    return { KhaiNiem: state.KhaiNiem }
}

export default connect(mapStateToProps)(Khai_niem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    top: {
        flex: 6,
        width: width,
        fontWeight: "bold",
    },

    bot: {
        flex: 1,
        justifyContent: "center",
    }
})