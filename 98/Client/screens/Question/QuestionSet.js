import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from '../../styles/style.js';
import { Feather } from '@expo/vector-icons';
import config from '../../components/config';


export default function QuestionSet({ route, navigation }) {
    const questionSet = route.params.questionSet;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [index_,setIndex_] = useState(0);
    useEffect(() => {
        fetch(config.IP_SEVER + '/admin/questions/json/' + questionSet)
            .then((response) => response.json())
            .then((json) => setData(json.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));


    });

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <View style={{ paddingHorizontal: 10 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => {
                                setIndex_(index);
                              
                            }}>
                                <View style={{ paddingVertical: 15, paddingHorizontal: 30, borderBottomColor: "#cccccc", borderBottomWidth: 2 }}>
                                    <Text style={{ fontSize: 15, textTransform: 'uppercase' }}>{item.Q_name}</Text>
                        
                                </View>
                            </TouchableOpacity>)}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                 
                    <View style={{ marginLeft: 25, marginRight: 10, marginTop: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data[index_].Q_title}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, }}>
                            <Feather name="check-square" size={32} color="green" />
                            <Text style={{ flex: 1, fontSize: 16, paddingLeft: 15 }}>{data[index_].Q_1}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, }}>
                            <Feather name="check-square" size={32} color="green" />
                            <Text style={{ flex: 1, fontSize: 16, paddingLeft: 15 }}>{data[index_].Q_2}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, }}>
                            <Feather name="check-square" size={32} color="green" />
                            <Text style={{ flex: 1, fontSize: 16, paddingLeft: 15 }}>{data[index_].Q_3}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, }}>
                            <Feather name="square" size={32} color="gray" />
                            <Text style={{ flex: 1, fontSize: 16, paddingLeft: 15 }}>{data[index_].Q_4}</Text>
                        </View>

                        <Text style={{ fontSize: 14.5, textDecorationLine: 'underline', color: 'gray', marginTop: 25 }}>Gợi ý:</Text>
                        <Text style={{ fontSize: 14.5, color: 'gray' }}>{data[index_].Q_suggest}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#cc0000', marginTop: 25 }}>
                            Đáp án: {data[index_].Q_check}
                        </Text>
                    </View>
                </View>
            )}


        </View>
    );
                        
}