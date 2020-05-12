import React from 'react';
import renderer from 'react-test-renderer';
import Car from '../screens/rules/Car';

it('renders correctly', () => {
  const tree = renderer.create(<Car />).toJSON();
  expect(tree).toMatchSnapshot();
});
