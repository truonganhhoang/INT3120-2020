import React from 'react';
import renderer from 'react-test-renderer';
import Words from '../../components/Words';

describe('test words', () => {
  const words = renderer.create(<Words type='all' />);
  const wordsInstance = words.getInstance();
  const wordsJSON = words.toJSON();

  // test 1
  it('test favorite switch', () => {
    let fakeData = {
      favorite: 0
    };
    wordsInstance.favoriteSwitch(fakeData);
    expect(fakeData.favorite).toBe(1);
  });

  // test 2
  it('test remind switch', () => {
    let fakeData = {
      remind: 0
    };
    wordsInstance.remindSwitch(fakeData);
    expect(fakeData.remind).toBe(1);
  });

  // test 3
  it('renders correctly', () => {
    expect(wordsJSON).toMatchSnapshot();
  });
})
