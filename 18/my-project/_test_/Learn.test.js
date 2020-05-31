import React from 'react';
import renderer from 'react-test-renderer';
import Learn from '../screens/Learn';

it('renders correctly', () => {
  const tree = renderer.create(<Learn />).toJSON();
  expect(tree).toMatchSnapshot();
});
