import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet,Image } from 'react-native';

export default function Detail  () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.128:3000/admin/trafficsigns/json')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  );

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
            <Text
            style={styles.textLogo}
            >{item.tfs_name}, {item.tfs_category_id}</Text>
            <Image
      style={styles.tinyLogo}
      source={{
        uri: 'http://192.168.1.128:3000'+item.tfs_image,
      }}
    />
      <Text
            style={styles.textLogo}
            >{item.tfs_content}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: null,
    height: 500,
    resizeMode: 'contain',
  },
  textLogo:
  {
    fontSize:30,
    textAlign:"center",
  },
});