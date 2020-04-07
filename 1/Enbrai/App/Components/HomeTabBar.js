import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements'
import styles from './Styles/HomeTabBarStyles'

class HomeTabBar extends Component {
  icons = [];
  constructor(props) {
    super(props);
    this.icons = [];
  }

  render() {
    var logo = ['person-outline', 'lightbulb-outline', 'settings'];
    var logoFilled = ['person', 'lightbulb-outline', 'settings'];
    return (
      <View style={[styles.tabs, this.props.style,]}>
        {this.props.tabs.map((tab, i) => {
          icon = logo[i]
          iconFilled = logoFilled[i]
          return <TouchableOpacity key={i} onPress={() => this.props.goToPage(i)} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Icon
              name={(this.props.activeTab === i) ? iconFilled : icon}
              size={28}
              color={this.props.activeTab === i ? '#fff' : '#C6C6C6'}
              ref={(icon) => {
                this.icons[i] = icon;
              }}
            />
            <Text style={[styles.text, { color: this.props.activeTab === i ? '#fff' : '#C6C6C6' }]}>
              {i === 0 ? 'Tài Khoản' : i === 1 ? 'Học Tập' : 'Cài đặt'}
            </Text>
          </TouchableOpacity>;
        })}
      </View>
    )
  }
}
export default HomeTabBar;

