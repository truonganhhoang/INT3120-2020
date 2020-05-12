import React from 'react';
import renderer from 'react-test-renderer';
import Translate from '../../Screens/Translate';

describe('test translate', () => {
  const translate = renderer.create(
  <Translate 
    navigation = {
      {
        navigate: jest.fn()
      }
    }
  />);
  const translateInstance = translate.getInstance();
  const translateJSON = translate.toJSON();

  // test 1
  it('change language', () => {
    const oldState = translateInstance.state
    translateInstance.changeLanguage();
    expect(translateInstance.state).not.toEqual(oldState);
  });

  // test 2
  it('renders correctly', () => {
    expect(translateJSON).toMatchSnapshot();
  });
})