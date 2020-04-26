import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class Item extends Component {
    constructor(props) {
        super(props)
    }
    onSelectItem = () => {
        if(this.props.data.router_name == 'Home'){
            this.props.navigation.closeDrawer()
        }
        this.props.navigation.navigate(this.props.data.router_name)
    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.onSelectItem()}
                style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
            >
                <View style={styles.view}>
                        <Image source={this.props.data.icon} style={styles.image} />
                        <Text style={styles.text}>{this.props.data.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = {
    view: {
        flexDirection: 'row',
        height: 40,
        marginRight: 10,
        alignItems: 'center',
        width: '100%',
    },
    image: {
        marginLeft: 5,
        paddingBottom: 10,
        width: 30,
        height: 30
    },
    text: {
        paddingLeft: 15,
        fontWeight: 'bold'
    }
}