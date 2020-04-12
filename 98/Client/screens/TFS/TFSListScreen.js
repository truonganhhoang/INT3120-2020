import React, { useEffect, useState } from 'react';
import {  View, FlatList, StyleSheet, Text, Image,ActivityIndicator } from 'react-native';
import Item from '../../components/TFS/TFSItem';
import config from '../../components/config';

export default function TrafficSignList(props) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const {navigation} = props;
    const{route,title,image}=props.route.params;
  
    useEffect(() => {
      fetch(config.IP_SEVER+'/admin/trafficsigns/json/'+route)
        .then((response) => response.json())
        .then((json) => setData(json.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  
    );
  
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View>
              <View style={styles.container}>
                  <View style={styles.head}>
                      <Text style={styles.head_content}>Loại biển báo: </Text>
                  </View>

                  <View style={styles.select_items}>
                  <Image style={styles.tinyLogo} source={{ uri: config.IP_SEVER+image}} />
                      <Text style={styles.select_items_title} > {title} </Text> 
                  </View>

              </View>

          <View style={styles.detail}>
              <Text style={styles.detail_text}>Nhấn vào từng biển báo để xem chi tiết</Text>
          </View>
      </View>
    {isLoading ? <ActivityIndicator /> : (
  <FlatList
        horizontal={false}
        numColumns={2}
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) =>
            <Item title={item.tfs_name} image={item.tfs_image} content={item.tfs_content} navigation={navigation} />}
        style={{ marginLeft: 16, }}
  />
    )}
  </View>
    );
    
  }
  
  
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1.5,
        borderColor: '#808080',
        //marginTop: 50,
    },
    head: {
        height: 35,
        //borderTopWidth: 0.7,
        //borderColor: '#dcdcdc',
        justifyContent: 'center',
    },
    head_content: {
        color: '#808080',
        marginLeft: 8,
    },
    select_items: {
        height: 50,
        borderColor: '#dcdcdc',
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 7,
        borderWidth: 0.8,
        marginBottom: -0.3,
        alignItems: 'center',
        flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    select_items_title: {
        fontSize: 18,
        color: '#696969',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    detail: {
        height: 50,
        justifyContent: 'center',
        //alignContent: 'center',
    },
    detail_text: {
        color: '#808080',
        textAlign: 'center',
    },
    tinyLogo: {
        height: 33,
        width: 33,
        marginLeft: 5,
    },
});

