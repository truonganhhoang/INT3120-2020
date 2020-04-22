import React from 'react';
// import PropTypes from 'prop-types';
import {  View, Image, StyleSheet } from 'react-native';
const localStyles = StyleSheet.create({
    img: {
        width: 320,
        height: 220,
        borderRadius: 12,
        marginHorizontal: 8,
    }
});
const Pagination = () => {
    return (
      <View style={{flex:"row"}}>
        <Image style={localStyles.img} source={require('../../img/01.jpg')}/>
        <Image style={localStyles.img} source={require('../../img/02.jpg')}/> 
        <Image style={localStyles.img} source={require('../../img/03.jpg')}/>
      </View>
    );
  };

export default Pagination;