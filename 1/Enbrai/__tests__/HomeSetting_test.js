import React from 'react';

import renderer from 'react-test-renderer';
import HomeSetting from '../App/Components/HomeSetting';

test('renders correctly', () => {
  const tree = renderer.create(<HomeSetting />).toJSON();
  expect(tree).toMatchSnapshot();
});