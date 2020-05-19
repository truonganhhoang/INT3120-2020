import React from 'react';
import renderer from 'react-test-renderer';

import Bo from './bo';

it('renders correctly', () => {
    const tree = renderer.create(<Bo/>).toJSON();
    expect(tree).toMatchSnapshot();
  });