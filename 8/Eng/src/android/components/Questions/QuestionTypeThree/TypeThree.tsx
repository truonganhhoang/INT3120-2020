import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Image, Card } from 'react-native-elements';
import styles from './style';
import layout from '../../../../android/constants/layout';
import { Grid, Row } from 'react-native-easy-grid';
const HEIGHT = layout.window.height;
const TypeThree = (props: { content?: any; id?: any }) => {
  const { content, id } = props;
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let check = 0;
    setStatus('loading')
    Object.keys(content).forEach((item, index) => {
      if (item == 'img_content') check++
    })
    if (check == 1) {
      setStatus('run')
    } else {
      setStatus('null')
    }

  }, [id])

  if (status == 'loading') {
    return (
      <View style={styles.container}>
        <Text>Waiting question...</Text>
      </View>
    )
  }
  else if (status == 'null') {
    return (
      <View style={styles.container}>
        <Text>Sorry! The Question is not ready.</Text>
      </View>
    )
  }
  else {
    return (
      <Grid>
        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: content.img_content }}
            style={styles.image}
          />
        </Row>
      </Grid >
    )
  }
}

export default TypeThree; 