import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Item from '../components/TFS/TFSCItem';

const pr = {
    iconName: 'Xem hướng dẫn',
    iconColor: 'red',
    title: 'HƯớng dẫn',
    content: 'Hướng dẫn các bài thi sa hình',
    button: 'button'
}

it('HomeItem snapshot', () => {
    const snap = renderer.create(
        <Item props={pr} />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});