import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import DetailVideo from '../screens/VideoHD/DetailVideo';

const vid ='https://truongdaotaolaixehcm.com/wp-content/uploads/2017/03/Thi-B2-Ch%C3%ADp-Sa-H%C3%ACnh-m%E1%BB%9Bi-nh%E1%BA%A5t-2018.mp4?_=1'

it('DetailVideo snapshot', () => {
    const snap = renderer.create(
        <DetailVideo vid={vid} />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});