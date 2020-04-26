import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import BasePage from '../../../base/BasePage'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { routes } from '../../../../route/config'

class Home extends BasePage {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleChoose = (item) => {
        this.props.navigation.navigate(item.router_name)
    }
    renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.renderItem.touchable} onPress={() => this.handleChoose(item)}>
                <View style={styles.renderItem.view}>
                    <View style={{ width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            resizeMode='contain'
                            source={item.image}
                            style={styles.renderItem.image}
                        />
                    </View>
                    <Text style={styles.renderItem.text}>{item.label}</Text>
                </View>
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
                    numColumns={2}
                    data={data}
                    renderItem={({ item }) => {
                        if (item.key != 'home') {
                            return this.renderItem(item)
                        }
                    }}
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
        marginTop:20
    },
    renderItem: {
        touchable: {
            width: width / 2,
            height: 170,
            paddingLeft: 10,
            paddingRight: 10,

        },
        view: {
            width: '99%',
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
            marginTop:10,
            fontWeight:'bold'
        }

    }
}
export default Home