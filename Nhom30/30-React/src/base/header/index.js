import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text, Image, View, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleTitle = (title) => {
        switch (title) {
            case 'LearnTheoryScreen':
                return 'Học lý thuyết'
                break;
            case 'Home':
                return 'Thi thử bằng lái xe a1 2019'
                break;
            case 'ListBoard':
                return 'Biển báo đường bộ'
                break;
            case 'Tips':
                return 'Mẹo thi đạt kết quả cao'
                break;
	    case 'SearchScreen':
		return 'Tra cứu luật nhanh'
		break;
        }
    }
    handleChooseLeft = () => {
        this.props.parent.props.navigation.openDrawer()
    }

    renderLeft = () => {
        if (this.props.parent.props.navigation.state.routeName != 'Home') {
            return (
                <TouchableOpacity style={styles.renderLeft.touchableOpacity} onPress={() => this.props.parent.props.navigation.goBack()}>
                    <Image
                        source={require('../../../icon/icon_back.png')}
                        style={styles.renderLeft.image_back}
                    />
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity style={styles.renderLeft.touchableOpacity} onPress={() => this.handleChooseLeft()}>
                <Image
                    source={require('../../../icon/icon_menu.png')}
                    style={styles.renderLeft.image}
                />
            </TouchableOpacity>
        )
    }

    renderCenter = () => {
        if (this.props.parent.props.navigation.state.params) {
            return (
                <View style={styles.renderCenter.view}>
                    <Text style={styles.renderCenter.text}>{this.props.parent.props.navigation.state.params.label}</Text>
                </View>
            )
        }
        return (
            <View style={styles.renderCenter.view}>
                <Text style={styles.renderCenter.text}>{this.handleTitle(this.props.parent.props.navigation.state.routeName)}</Text>
            </View>
        )
    }
    handleVIP = () => {
        Alert.alert(
            'Thi thử GPLX',
            'Nâng cấp VIP',
            [
              {text: 'Huỷ bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Đồng ý', onPress: () => console.log('OK Pressed'), style:'destructive'},
            ],
            { cancelable: false }
          )
    }
    renderRight = () => {
        return (
            <TouchableOpacity style={styles.renderRight.touchableOpacity} onPress={this.handleVIP}>
                <Image
                    source={require('../../../icon/icon_star.png')}
                    style={styles.renderRight.image}
                />
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.block}>
                {this.renderLeft()}
                {this.renderCenter()}
                {this.renderRight()}
            </View>
        )
    }
}
const { width } = Dimensions.get('window')
const styles = {
    block: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        backgroundColor: 'green',
        flexDirection: 'row',
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0

    },
    renderLeft: {
        view: {
            width: '20%',
            height: '100%',
        },
        touchableOpacity: {
            width: width / 5,
            height: 60,
            justifyContent: 'center',
            paddingLeft: 15
        },
        image: {
            width: 25,
            height: 25
        },
        image_back: {
            width: 40,
            height: 40
        }
    },
    renderCenter: {
        view: {
            width: '60%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            fontSize: 17,
            color: 'white',
            fontWeight: 'bold',
            textAlign:'center'
        }
    },
    renderRight: {
        view: {
            width: '20%',
            height: '100%',
        },
        touchableOpacity: {
            width: width / 5,
            height: 60,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 10

        },
        image: {
            width: 25,
            height: 25
        }
    },
}
