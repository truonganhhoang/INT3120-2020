import 'react-native';
import React from 'react';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/Home/HomeScreen';

test('Main snapshot', () => {
    const snap = renderer.create(
        <HomeScreen />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});