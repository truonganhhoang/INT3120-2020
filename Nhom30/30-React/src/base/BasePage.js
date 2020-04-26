import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'
import Header from './header'

export default class BasePage extends Component {
    constructor(props) {
        super(props)
    }

    renderContent = () => {
        return null
    }

    render() {
        return (
            <SafeAreaView>
                <View >
                    <Header parent={this} />
                    <View style={{marginTop:60}}>
                        {this.renderContent()}
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}