import React from 'react';

import renderer from 'react-test-renderer';
import HomeStudy from '../App/Components/HomeStudy';
test('renders correctly', () => {
  const tree = renderer.create(<HomeStudy />).toJSON();
  expect(tree).toMatchSnapshot();
});