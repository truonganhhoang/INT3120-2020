import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import layout from '../../../constants/layout';
import { Grid, Row } from 'react-native-easy-grid';
const HEIGHT = layout.window.height;
const TypeTwo = (props: { content?: any; id?: any }) => {
  const { content, id } = props;
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let check = 0;
    setStatus('loading')
    Object.keys(content).forEach((item, index) => {
      if (item == 'txt_content') check++
    })
    if (check == 1) {
      setStatus('run')
    } else {
      setStatus('null')
    }
  }, [id])

  if (status == 'loading') {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.05, marginBottom: HEIGHT * 0.1 }}>
        <Text>Waiting question...</Text>
      </View>
    )
  }
  else if (status == 'null') {
    return (
      <View>
        <Text>Sorry! The Question is not ready.</Text>
      </View>
    )
  }
  return (
    <Grid>
      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40, color: '#f57f17' }}>{content.txt_content}</Text>
      </Row>
    </Grid>
  )
}

export default TypeTwo; 