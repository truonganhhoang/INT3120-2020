import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './Styles/TestBodyStyles'
import Swiper from 'react-native-swiper'
class TestBody extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            visibleA: false,
            visibleB: false,
            visibleC: false,
            visibleD: false,
        }
    }
    setVisibleA() {
        if (this.state.visibleA === false) this.setState({
            visibleA: true, visibleB: false, visibleC: false,visibleD: false
        })
        else if (this.state.visibleA === true) this.setState({ visibleA: false, visibleB: false,visibleC: false,visibleD: false })

    }
    setVisibleB() {
        if (this.state.visibleB === false) this.setState({ visibleB: true, visibleA: false, visibleC: false,visibleD: false })
        else if (this.state.visibleB === true) this.setState({ visibleA: false, visibleB: false,visibleC: false,visibleD: false })

    }
    setVisibleC() {
        if (this.state.visibleC === false) this.setState({ visibleC: true, visibleA: false, visibleB: false,visibleD: false })
        else if (this.state.visibleC === true) this.setState({ visibleA: false, visibleB: false,visibleC: false,visibleD: false })

    }
    setVisibleD() {
        if (this.state.visibleD === false) this.setState({ visibleD: true, visibleA: false, visibleC: false,visibleB: false })
        else if (this.state.visibleD === true) this.setState({ visibleA: false, visibleB: false,visibleC: false,visibleD: false })

    }
    renderSwiper(data) {
        return (
            <View style={styles.slide1}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.question}>
                        <Text style={styles.text}>1/15</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Icon name="star" size={36} color="#9DD6EB" style={styles.iconStart} />
                        <Icon name="bookmark" size={36} color="#9DD6EB" style={styles.iconBookmark} />
                    </View>
                </View>
                <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                    <Text style={styles.content}>{data.question}</Text>
                </View>
                <View style={{
                    backgroundColor: this.state.visibleA === true ? "#4CAF50" : "#97CAE5",
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => this.setVisibleA()}
                    >
                        <Text style={styles.option1}>{data.a}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.state.visibleB === true ? "#4CAF50" : "#97CAE5",
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => this.setVisibleB()}
                    >
                        <Text style={styles.option1}>{data.b}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.state.visibleC === true ? "#4CAF50" : "#97CAE5",
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => this.setVisibleC()}
                    >
                        <Text style={styles.option1}>{data.c}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: this.state.visibleD === true ? "#4CAF50" : "#97CAE5",
                    borderRadius: 20,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => this.setVisibleD()}
                    >
                        <Text style={styles.option1}>{data.d}</Text>
                    </TouchableOpacity>
                </View>
            </View >
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
                <ScrollView>
                    <Swiper
                        showsButtons={true}
                        buttonWrapperStyle={{ alignItems: 'flex-end' }}
                        showsPagination={false}
                    >

                        {this.renderSwiper(data[0])}
                        {this.renderSwiper(data[0])}
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                    <View style={styles.submit}>
                        <Text style={styles.text}>Submit</Text>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}
const data = [
    {
        question: "Question: jsalkdfjsldkfjlsakfdjl;sajflsajfdl;jslfj;sajdflsakjdf;l;sdfj;sadfsdflksdfljlksajfdlalsfjlksdfjklsdfls_______dfllsdlfjs",
        a: "alskdjflskdjflsdkjflsjd",
        b: "aslkdfjlsdjf",
        c: "lasdkfjlsdjfjdfljdfj",
        d: "laskdjflsjdfsdf",
    },
    {
        question: "Question: jsalkdfjsldkfjlsakfdjl;sajflsajfdl;jslfj;sajdflsakjdf;l;sdfj;sadfsdflksdfljlksajfdlalsfjlksdfjklsdfls_______dfllsdlfjs",
        a: "alskdjflskdjflsdkjflsjd",
        b: "aslkdfjlsdjf",
        c: "lasdkfjlsdjfjdfljdfj",
        d: "laskdjflsjdfsdf",
    }
]
export default TestBody