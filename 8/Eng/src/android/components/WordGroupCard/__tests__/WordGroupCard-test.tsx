import 'react-native'; 
import React from 'react'; 
import CardWordGroup from '../WordGroupCard'; 
import renderer from 'react-test-renderer'; 

const data1 = {

}
const navigation1 = {}
const topicName1 = ''


it('rerender WordGroupCard Component correctly', () => {
  renderer.create(
    <CardWordGroup 
      data={data1}
      navigation={navigation1}
      topic_name={topicName1}
    />
  )
})
