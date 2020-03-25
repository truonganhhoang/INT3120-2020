/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { styles } from './Component/Style.js';

export default class App extends Component {

  // constructor() {
  //   this.state = {};
  //   this.setState();
  // }

  render() {
    return (
      <View style={styles.container} >
        <View>
          <Text style={[styles.title, styles.padding]}>
            Chọn bằng lái xe ôn thi
        </Text>
        </View>
        <ScrollView>
          <View style={[styles.borderbottom, styles.padding]}>
            <Text style={styles.textHeader}>
              BẰNG A1
        </Text>
            <Text style={styles.textContent}>
              Xe mô tô hai bánh có dung tích xy lanh dưới 175cm3
        </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG A2
        </Text>
            <Text style={styles.textContent}>
              Xe mô tô hai bánh có dung tích xy lanh từ 175cm3 trở lên
        </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG A3
        </Text>
            <Text style={styles.textContent}>
              Xe mô tô 3 bánh
        </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG A4
        </Text>
            <Text style={styles.textContent}>
              Máy kéo nhỏ có trọng tải đến 1000kg
        </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG B1
        </Text>
            <Text style={styles.textContent}>
              Không hành nghề lái xe, xe đến 9 chỗ ngồi, xe trọng tải dưới 3.5000kg
        </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG B2
            </Text>
            <Text style={styles.textContent}>
              Hành nghề lái xe, xe đến 9 chỗ ngồi, xe trọng tải dưới 3.5000kg
            </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG C
            </Text>
            <Text style={styles.textContent}>
              Xe ô tô đến 9 chỗ ngồi, xe trọng tải trên 3.5000kg
            </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG D
            </Text>
            <Text style={styles.textContent}>
              Xe ô tô chở từ 10 đến 30 người
            </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG E
            </Text>
            <Text style={styles.textContent}>
              Xe ô tô chở trên 30 người
            </Text>
          </View>
          <View style={[styles.borderbottom, styles.padding]} >
            <Text style={styles.textHeader}>
              BẰNG F
            </Text>
            <Text style={styles.textContent}>
              Xe rơ mooc
            </Text>
          </View>

        </ScrollView>
      </View>

    );
  }

};
