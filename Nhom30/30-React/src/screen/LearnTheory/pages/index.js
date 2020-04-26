import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import BasePage from '../../../base/BasePage'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { routes } from '../../../../route/config'
import { dataLearnTheory } from '../../../helper/constant'
import { Card } from 'native-base'

class LearnTheoryScreen extends BasePage {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    navigateToDetails = (item) => {
        this.props.navigation.navigate('LearnDetailsScreen', item)
    }
    renderItem = (item) => {

        return (
            <TouchableOpacity style={{width:'100%'}} onPress={() => this.navigateToDetails(item)}>
                <Card style={{ height: 70, flexDirection: 'row', borderRadius:5 }}>
                    <View style={{ width: '20%', justifyContent: 'center', alignItem: 'center', padding: 10 }}>
                        <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', width: '67%', height: '100%', borderRadius: 100 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>{item.label[0]}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.label}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{width:'70%', backgroundColor:'#c3c3c3', height:4,marginTop:8}}>
                            </View>
                            <Text style={{paddingLeft:10, fontWeight:'bold'}}>{item.quantity} <Text style={{color:'green', fontWeight:'normal'}}>Câu</Text></Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }
    renderContent = () => {
        let data = []
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].key != "home") {
                data.push(routes[i])
            }
        }
        return (
            <View style={styles.view}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={dataLearnTheory}
                    keyExtractor={data => data.id}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        )
    }
}
const { width } = Dimensions.get('window')
const styles = {
    view: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop:20
    },
    renderItem: {
        touchable: {
            width: '50%',
            height: 170,
            paddingLeft: 10,
            paddingRight: 10,

        },
        view: {
            width: '49%',
            height: 150,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
        },
        image: {
            width: 80
        },
        text: {
            marginTop: 10,
            fontWeight: 'bold'
        }

    }
}
export default LearnTheoryScreen
