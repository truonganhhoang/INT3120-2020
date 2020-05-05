import 'react-native';
import React from 'react'; 
import CardExtend from '../Card'; 
import renderer from 'react-test-renderer';

// icon_top: any, img_top: any, vn_meaning: any, navigation?: any, topic_name: any, icon_type: any
it('rerender Card Component correctly', () => {
  renderer.create(
    <CardExtend 
      icon_top={''}
      img_top={''}
      vn_meaning={''}
      navigation={''}
      topic_name={''}
      icon_type={''}
  />)
}); 
