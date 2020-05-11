import React from 'react';
import renderer from 'react-test-renderer';
import Words from '../../components/Words';
test('renders correctly', () => {
  const tree = renderer.create(<Words />).toJSON();
  expect(tree).toMatchSnapshot();
});
