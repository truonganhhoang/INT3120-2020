import React from 'react';
import renderer from 'react-test-renderer';

import VachKeDuong from './VachKeDuong';

it('renders correctly', () => {
    const tree = renderer.create(<VachKeDuong />).toJSON();
    expect(tree).toMatchSnapshot();
  });