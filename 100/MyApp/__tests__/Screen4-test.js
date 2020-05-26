import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Screen4 from '../src/components/screens/Screen4';

test('Main snapshot', () => {
  const snap = renderer.create(
    <Screen4 />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});