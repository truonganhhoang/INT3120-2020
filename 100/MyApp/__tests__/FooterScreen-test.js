import 'react-native';
import React from 'react';
 
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import FooterScreen from '../src/components/components/Footer';
 
test('Main snapshot', () => {
  const snap = renderer.create(
    <FooterScreen />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});