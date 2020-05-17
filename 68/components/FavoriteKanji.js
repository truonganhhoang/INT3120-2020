import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Button
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => (deviceWidth * percent) / 100;
export default function FavoriteKanji() {
  return (
    <View>
      <Text style={styles.title}>
        Tạo Kanji của riêng bạn
      </Text>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>
          Hán tự
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập hán tự của bạn"
        />
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>
          Nghĩa Hán-Việt
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập nghĩa hán việt"
        />
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>
          Âm on
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập âm on"
        />
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>
          Âm kun
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập âm kun"
        />
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.titleInput}>
          Ví dụ cách sử dụng
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ví dụ"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Lưu lại"
          color="#006265"
          raised
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    elevation: 4,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 11,
    borderWidth: 0,
    flexDirection: 'row',

  },
  title: {
    fontSize: 19,
    color: '#006265',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: screen(3),
    marginBottom: screen(5)
  },
  ImageChallenge: {
    width: 30,
    height: 30,
    marginLeft: '2%'
  },
  contentInput: {
    marginBottom: screen(3)
  },
  textInput: {
    width: screen(94),
    borderColor: 'gray',
    borderWidth: 1,
    height: screen(12),
    marginLeft: screen(3),
    borderRadius: 5,
    padding: 10,
  },
  titleInput: {
    marginLeft: screen(3),
    fontSize: 17,
    marginBottom: 3,
  },
  button: {
    marginTop: screen(5),
    width: screen(94),
    marginLeft: screen(3),
  }
});
