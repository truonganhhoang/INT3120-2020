import React from 'react';
import renderer from 'react-test-renderer';
import Practive from '../screens/Tips/Practive';

it('renders correctly', () => {
  const tree = renderer.create(<Practive />).toJSON();
  expect(tree).toMatchSnapshot();
});
