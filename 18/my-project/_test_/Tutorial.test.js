import React from 'react';
import renderer from 'react-test-renderer';
import Tutorial from '../screens/Tutorial';

it('renders correctly', () => {
  const tree = renderer.create(<Tutorial />).toJSON();
  expect(tree).toMatchSnapshot();
});
