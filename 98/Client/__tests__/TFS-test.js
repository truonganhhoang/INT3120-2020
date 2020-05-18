import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Item from '../components/TFS/TFSCItem';

it('TFS snapshot', () => {
    const snap = renderer.create(
        <Item />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});