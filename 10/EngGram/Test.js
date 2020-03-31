
import React, { Component } from 'react';
import { Text, View,Button,Alert,StyleSheet } from 'react-native';
import { Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

export default class Test extends Component {
  render() {
    return (
      <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Bài kiểm tra ngữ pháp{'\n'}</Text>
        <Text style={styles.sectionTitle}>Nhóm 10 gồm có 3 thành viên: </Text>
        <Text style={styles.sectionDescription}>
          - 17020680 Cao Quý Đăng{'\n'}
          - 17020190 Sụ phít Phôm ma chăn{'\n'}
          - 17020658 Nuyễn Xuân Dương{'\n'}</Text>
        <Text style={styles.sectionTitle}>Mô tả ứng dụng : </Text>
        
        <Button
          title="Trở về"
           onPress={() => Alert.alert('Bạn muốn trở về ?')}
         />
      </View>
      
    </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});