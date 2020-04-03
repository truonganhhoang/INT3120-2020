import * as React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import TrafficSignListCategories from '../../components/TFS/TFSListCategories';

export default function TrafficSignScreen(props) {
  const {navigation}=props;

  return (
    <View  > 
          
          <TrafficSignListCategories   navigation={navigation} /> 

    </View>
  
  );
}



const styles = StyleSheet.create({

  
});