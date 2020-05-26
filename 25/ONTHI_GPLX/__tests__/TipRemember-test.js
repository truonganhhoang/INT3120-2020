import 'react-native';
import React from 'react';
import TipRemember from '../screens/TipRemember';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<TipRemember />);
});