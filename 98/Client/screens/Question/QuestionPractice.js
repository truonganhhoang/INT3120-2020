import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import styles from '../../styles/style.js';
import config from '../../components/config';

export default function QuestionPractice({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(config.IP_SEVER + '/admin/QuestionCategories/json')
            .then((response) => response.json())
            .then((json) => setData(json.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    });

    return (

        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        (
                            <TouchableOpacity onPress={() => navigation.navigate('QuestionSet', { questionSet: item.QC_id })}>
                                <Item
                                    color={item.QC_color}
                                    questionRange={item.QC_count}
                                    title={item.QC_name}
                                    briefDescription={item.QC_content}
                                    theme={item.QC_button}
                                />
                            </TouchableOpacity>
                        )
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    );
}

function Item(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.floatLeft}>
                <TripleCirleIcon color={props.color} />
                <Text style={{ color: props.color, marginTop: 10 }}>{props.questionRange} câu</Text>
            </View>

            <View style={styles.floatRight}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.briefDescription}>{props.briefDescription}</Text>
                <View style={{ backgroundColor: props.color, height: 30, width: 120, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textTransform: "uppercase", color: '#fff', fontWeight: "bold" }}>{props.theme}</Text>
                </View>
            </View>
        </View>
    );
}

function TripleCirleIcon(props) {
    return (
        <View style={getStyle(60, props.color)}>
            <View style={getStyle(34, props.color)}>
                <View style={getStyle(14, props.color)}>
                </View>
            </View>
        </View>
    );
}

function getStyle(size, color) {
    return {
        height: size,
        width: size,
        borderColor: color,
        borderRadius: 50,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
}