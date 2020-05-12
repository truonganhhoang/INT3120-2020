import React from 'react';
import renderer from 'react-test-renderer';
import Skill from '../screens/Skill';

it('renders correctly', () => {
  const tree = renderer.create(<Skill />).toJSON();
  expect(tree).toMatchSnapshot();
});
