import React from 'react';

import renderer from 'react-test-renderer';
import EmptyFlatList from '../App/Components/EmtyFlatList';

test('renders correctly', () => {
  const tree = renderer.create(<EmptyFlatList />).toJSON();
  expect(tree).toMatchSnapshot();
});