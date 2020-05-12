import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import { Question, Answer, PresentQuestion } from '../../components/Question';

const data = [
    {
        id: '1',
        question: 'Khái niệm "phần đường xe chạy" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại.'
            },
            {
                key: '2',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, dải đất dọc hai bên đường để đảm bảo an toàn giao thông.'
            },
            {
                key: '3',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, các công trình, thiết bị phụ trợ khác và dải đất dọc hai bên đường để đảm bảo an toàn giao thông.'
            }
        ]
    },
    {
        id: '2',
        question: '"Vạch kẻ đường" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.'
            },
            {
                key: '2',
                text: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.'
            },
            {
                key: '3',
                text: 'Tất cả các ý trên.'
            }
        ]
    },
]

const { width, height } = Dimensions.get('window');

export function Khai_niem({ route, navigation }) {
    //const { name } = route.props;
    return (
        <FlatList
            removeClippedSubviews={true}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            // onScrollAnimationEnd={true}
            // style={{ justifyContent: "center", alignItems: "center" }}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <View>
                        <View style={styles.top}>
                            <ScrollView>
                                <Question text={item.question} />

                                <FlatList
                                    data={item.answer}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <Answer number={index + 1} answer={item.text} />
                                        )
                                    }}
                                >
                                </FlatList>
                            </ScrollView>
                        </View>

                        <View style={styles.bot}>
                            <PresentQuestion number={item.id} next={() => scrollToIndex(1)} />
                        </View>

                    </View>


                )
            }}
        >
        </FlatList>

    );
}

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