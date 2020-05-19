import React from 'react';
import renderer from 'react-test-renderer';

import BienBaoPhu from './BienBaoPhu';

it('renders correctly', () => {
    const tree = renderer.create(<BienBaoPhu />).toJSON();
    expect(tree).toMatchSnapshot();
  });