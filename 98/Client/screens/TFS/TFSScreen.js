import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import Item from '../../components/TFS/TFSCItem';
import config from '../../components/config';


// <TrafficSignListCategories   navigation={navigation} /> 



export default function TrafficSignScreen(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { navigation } = props;

  useEffect(() => {
    fetch(config.IP_SEVER+'/admin/trafficsignCategories/json')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  );

    return (
        <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Item title={item.tfsc_name} route={item.tfsc_id} image={item.tfsc_image} navigation={navigation} /> 
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

