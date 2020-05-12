import React from 'react';
import renderer from 'react-test-renderer';

import BienCam from './BienCam';

it('renders correctly', () => {
    const tree = renderer.create(<BienCam />).toJSON();
    expect(tree).toMatchSnapshot();
  });