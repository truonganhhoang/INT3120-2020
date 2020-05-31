import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import VideoListScreen from '../screens/VideoHD/VListScreen';

it('Video snapshot', () => {
    const snap = renderer.create(
        <VideoListScreen />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});