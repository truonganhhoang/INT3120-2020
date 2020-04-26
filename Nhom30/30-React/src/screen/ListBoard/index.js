import React from 'react'
import BasePage from '../../base/BasePage'
import { View, Text, Dimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { dataNoticeBoard } from '../../helper/constant'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Card } from 'native-base'

export default class ListBoard extends BasePage {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    handleIndex = (index) => {
        this.setState({ index: index })
    }
    renderItemHeader = (item) => {
        return (
            <TouchableOpacity
                onPress={() => this.handleIndex(item.id)}
                style={{ 
                    width: 130, 
                    height:30,
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor:this.state.index == item.id ? '#1d6b3a' : "green",
                    borderRadius:100,
                    marginRight:5

                
                }}>
                <View style={{ height: 50, width: 150, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>{item.label}</Text>
                </View>
            </TouchableOpacity>
        )

    }
    renderHeader = () => {
        return (
            <View style={{ 
		backgroundColor: 'green', 
		width: '100%', height: 50, 
		justifyContent: 'center', 
		paddingLeft: 10, 
		paddingTop:10, 
		paddingBottom:10 }}>
                <FlatList
                    data={dataNoticeBoard}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={data => data.id}
                    renderItem={({ item }) => this.renderItemHeader(item)}
                />
            </View>
        )
    }
    renderItemBoard = (item) => {
        return (
            <Card style={{ width: '100%', flexDirection: 'row', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={item.image}
                        style={{ width: 70, height: 70 }}
                    />
                </View>
                <View style={{ width: '75%', paddingLeft: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
                    <Text>{item.description}</Text>
                </View>
            </Card>
        )
    }
    renderListBoard = (item) => {
        return (
            <View style={{ width: '99%', paddingLeft: 10, paddingRight: 10 }}>
                <FlatList
                    data={item.listItem}
                    keyExtractor={data => data.id}
                    extraData={this.state}
                    snapToAlignment={"center"}
                    renderItem={({ item, index }) => this.renderItemBoard(item)}
                />
            </View>
        )
    }
    renderContent = () => {
        let dataSwipeBoard = []
        const { height } = Dimensions.get('window')
        for (let i = 0; i < dataNoticeBoard.length; i++) {
            dataSwipeBoard.push(this.renderListBoard(dataNoticeBoard[i]))
        }
        return (
            <View style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
            }}>
                {this.renderHeader()}
                <Swiper
                    loop={false}
                    index={this.state.index}
                    height={height}
                    horizontal={true}
                    showsPagination={false}
                    onIndexChanged={index => {
                        this.setState({ index: index })
                    }}
                >

                    {dataSwipeBoard}
                </Swiper>
            </View>
        )
    }
}
