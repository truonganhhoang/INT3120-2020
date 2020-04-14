import 'react-native-gesture-handler';
import React from 'react';
//import axios from 'axios';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import DataCategory from '../components/DataCategory';

export default class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, 
          title1: '1. Định nghĩa thì hiện tại đơn\n', 
          content1: ' - Thì hiện tại đơn(tiếng Anh: Simple present hoặc present simple) là một thì trong tiếng Anh hiện đại. Thì này diễn tả một hành động chung chung, tổng quát lặp đi lặp lại nhiều lần hoặc một sự thật hiển nhiên hoặc một hành động diễn ra trong thời điểm hiện tại.\n', 
          title2: '2. Cách sử dụng thì hiện tại đơn\n',
          content2: " - Diễn đạt một thói quen hoặc hành động lặp đi lặp lại trong hiện tại.\nVí dụ: I usually go to bed at 11 p.m. (Tôi thường đi ngủ vào lúc 11 giờ).\n - Chân lý, sự thật hiển nhiên.\nVí dụ: The sun rises in the East and sets in the West. (Mặt trời mọc ở phía Đông và mọc ở lặn ở phía Tây).\n  - Sự việc xảy ra trong tương lai.\nVí dụ: The plane takes off at 3 p.m this afternoon. (Chiếc máy bay hạ cánh lúc 3 giờ chiều nay).",
          title3: "3. Công thức thì hiện tại đơn\n",
          content3: " - Khẳng định:\n   S + am/are/is + ...\n     Ví dụ: I am a student.\n   S + V(s,es) + ...\n     Ví dụ: He often plays soccer. - Phủ định:\n    S + am/are/is + not + ...\n     Ví dụ: I am not a student.\n   S + do/does + not + V\n     Ví dụ: He doesn't often play soccer.\n - Nghi vấn:\n   Q: Am/Are/Is(not) + S + ... ?.\n   A: Yes/no, S + am/are/is(not).\n     Ví dụ: Are you a student? => Yes, I am/ No, I am not.\n",
          title4: "4. Dấu hiệu nhận biết thì hiện tại đơn\n",
          content4: " - Always, usually, often, frequently, sometimes, seldom, rarely, ...\n - Every day, every week, every year, ...\n - Once/ twice/ three times/ four times, ...a day/ week/ month, year, ...\n"
        }
      ]
    };
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <DataCategory data={data[0]} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'stretch',
    justifyContent: 'center'
    // paddingLeft: 10,
    // paddingRight: 10,
    //backgroundColor: '#f7f7f7'
  }
});

