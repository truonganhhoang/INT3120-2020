import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderScreen1 from '../src/components/components/HeaderScreen1';
 
test('Main snapshot', () => {
  const snap = renderer.create(
    <HeaderScreen1 />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});