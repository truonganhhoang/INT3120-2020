import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {Icon} from 'react-native-elements'
import styles from './Styles/HomeTabBarStyles'
import LinearGradient from 'react-native-linear-gradient';

 class HomeTabBar extends Component {
  icons = [];
  constructor(props) {
    super(props);
    this.icons = [];
  }

  render() {
    var logo = ['person', 'lightbulb-outline', 'settings'];
    return(
      <View style={[styles.tabs, this.props.style, ]}>
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.1)']}
                style={{
                    left: 0,
                    right: 0,
                    height: 1,
                    top: -1,
                    position: 'absolute'
                }}
              />
      {this.props.tabs.map((tab, i) => {
        icon = logo[i]
        return <TouchableOpacity key={i} onPress={() => this.props.goToPage(i)} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon
            name={icon}
            size={28}
            color={this.props.activeTab === i ? '#fff' : '#BDBDBD'}
            ref={(icon) => { this.icons[i] = icon; }}
          />
          <Text style = {[styles.text, {color: this.props.activeTab === i ? '#fff' : '#BDBDBD'}]}> {i === 0 ? 'Tài Khoản' : i === 1 ? 'Học Tập' : 'Cài đặt'} </Text>        
        </TouchableOpacity>;
      })}
    </View>
    )
  }
}
export default HomeTabBar;
// const styles = StyleSheet.create({
//   tab: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingBottom: 10,
//     backgroundColor: '#039BE5',
//   },
//   tabs: {
//     height: 60,
//     flexDirection: 'row',
//     paddingTop: 5,
//     borderWidth: 1,
//     borderTopWidth: 0,
//     borderLeftWidth: 0,
//     borderRightWidth: 0,
//     borderBottomColor: 'rgba(0,0,0,0.05)',
//   },
//   text: {
//       fontSize:16
//   }
// });

