import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './Styles/TestBodyStyles'
import { data } from '../Data/data'
class TestBody extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.setState({ data: data })
    }
    setVisibleA = (item, index) => {
        if (item.a.visible == false) {
            var newData = [...this.state.data]
            newData[index].a.visible = true
            newData[index].b.visible = false
            newData[index].c.visible = false
            newData[index].d.visible = false
            this.setState({ data: newData })
        }
        else {
            var newData = [...this.state.data]
            newData[index].a.visible = false
            newData[index].b.visible = false
            newData[index].c.visible = false
            newData[index].d.visible = false
            this.setState({ data: newData })
        }
    }
    setVisibleB = (item, index) => {
        if (item.b.visible == false) {
            var newData = [...this.state.data]
            newData[index].b.visible = true
            newData[index].a.visible = false
            newData[index].c.visible = false
            newData[index].d.visible = false
            this.setState({ data: newData })
        }
        else {
            var newData = [...this.state.data]
            newData[index].a.visible = false
            newData[index].b.visible = false
            newData[index].c.visible = false
            newData[index].d.visible = false
            this.setState({ data: newData })
        }
    }
    setVisibleC = (item, index) => {
        if (item.c.visible == false) {
            var newData = [...this.state.data]
            newData[index].c.visible = true
            newData[index].a.visible = false
            newData[index].b.visible = false
            newData[index].d.visible = false
            this.setState({ data: newData })
        }
        else {
            var newData = [...this.state.data]
            newData[index].a.visible = false
            newData[index].b.visible = false
            newData[index].c.visible = false
            newData[index].d.visible = false
            this.setState({ data: newData })
        }
    }
    setVisibleD = (item, index) => {
        if (item.d.visible == false) {
            var newData = [...this.state.data]
            newData[index].d.visible = true
            newData[index].a.visible = false
            newData[index].b.visible = false
            newData[index].c.visible = false
            this.setState({ data: newData })
        }
        else {
            var newData = [...this.state.data]
            newData[index].a.visible = false
            newData[index].b.visible = false
            newData[index].c.visible = false
            newData[index].d.visible = false
            this.setState({ data: newData })
        }
    }
    setColor(color) {
        if (color == true) return '#4CAF50'
        else if (color == false) return '#9DD6EB'
    }
    renderItem = ({ index, item }) => {
        return (
            <ScrollView style={styles.containerFlatList}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.question}>
                        <Text style={styles.text}>{item.number}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Icon name="star" size={36} color="#9DD6EB" style={styles.iconStart} />
                        <Icon name="bookmark" size={36} color="#9DD6EB" style={styles.iconBookmark} />
                    </View>
                </View>
                <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                    <Text style={styles.content}>{item.question}</Text>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.a.visible),//item.a.visible === true ? "#4CAF50" : "#97CAE5"
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => this.setVisibleA(item, index)}>
                        <Text style={styles.option1}>{item.a.name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.b.visible),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => this.setVisibleB(item, index)}>
                        <Text style={styles.option1}>{item.b.name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.c.visible),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => this.setVisibleC(item, index)}>
                        <Text style={styles.option1}>{item.c.name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.setColor(item.d.visible),
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => this.setVisibleD(item, index)}>
                        <Text style={styles.option1}>{item.d.name}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >

        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            style={styles.iconLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Tiêu đề</Text>
                    <Icon name='search' size={27} color='transparent' />
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.toString()}
                    horizontal={true}
                />
                <View style={styles.submit}>
                    <Text style={styles.text}>Submit</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default TestBody