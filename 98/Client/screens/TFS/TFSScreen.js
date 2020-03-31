import * as React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import TrafficSignList from '../../components/TFS/TFSList';

export default function TrafficSignScreen(props) {
  const {navigation}=props;

  return (
    <View  > 
          
        <TrafficSignList   navigation={navigation} /> 

    </View>
  
  );
}



const styles = StyleSheet.create({

  
});