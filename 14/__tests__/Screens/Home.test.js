import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../Screens/Home';

describe('Question', () => {
  const home = renderer.create(
  <Home 
    navigation = {
      {
        navigate: jest.fn()
      }
    }
  />);
  
  const homeJSON = home.toJSON();
  // test 1
  it('renders correctly', () => {
    expect(homeJSON).toMatchSnapshot();
  });
})