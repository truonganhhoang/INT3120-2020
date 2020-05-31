import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements'
import styles from './Styles/TabBarStyles'
export default class TabBar extends React.Component {
  icons = [];
  constructor(props) {
    super(props)
    this.icons = [];
  }

  textStyle = (active, i) => {
    return {
      fontSize: 10,
      color: active === i ? '#1976D2' : 'rgb(204,204,204)'
    }
  }
  textStyleDark = (active, i) => {
    return {
      fontSize: 10,
      color: active === i ? '#FAFAFA' : '#212121'
    }
  }
  render() {
    var logo = ['language', 'graduation-cap', 'check-square-o', 'gears']
    return (
      <View style={{
        height: 60,
        flexDirection: 'row',
        backgroundColor: this.props.darkMode === true ? '#263238' : '#fff',
      }}>
        {this.props.tabs.map((tab, i) => {
          icon = logo[i]
          if (this.props.darkMode === false) {
            return (
              <TouchableOpacity key={tab} style={styles.container}
                onPress={() => this.props.goToPage(i)} >
                <Icon
                  name={icon}
                  size={28}
                  color={this.props.activeTab === i ? '#1976D2' : 'rgb(204,204,204)'}
                  ref={(icon) => { this.icons[i] = icon; }}
                  type='font-awesome'
                />
                <Text style={this.textStyle(this.props.activeTab, i)}>{tab}</Text>
              </TouchableOpacity>)
          }
          else return (
            <TouchableOpacity key={tab} style={styles.container}
              onPress={() => this.props.goToPage(i)} >
              <Icon
                name={icon}
                size={28}
                color={this.props.activeTab === i ? '#FAFAFA' : '#212121'}
                ref={(icon) => { this.icons[i] = icon; }}
                type='font-awesome'
              />
              <Text style={this.textStyleDark(this.props.activeTab, i)}>{tab}</Text>
            </TouchableOpacity>)
        })}
      </View>
    )
  }
}