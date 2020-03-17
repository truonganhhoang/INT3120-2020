import React from 'react';
import { AppRegistry, StyleSheet, Text, View 
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dark}>
        Mobile App demo
      </Text>
      <Text style={styles.dark}>
        Cao Thị Ngọc Huyền
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center',
  },
  dark: {
    color: 'black',
  },
});
