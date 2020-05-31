import React from 'react';
import renderer from 'react-test-renderer';

import MeoThi from './MeoThi';

it('renders correctly', () => {
    const tree = renderer.create(<MeoThi />).toJSON();
    expect(tree).toMatchSnapshot();
  });