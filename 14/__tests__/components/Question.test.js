import React from 'react';
import renderer from 'react-test-renderer';
import Question from '../../components/Question';

describe('test question', () => {
  const question = renderer.create(
  <Question 
    question='test'
    answer1='true'
    answer2='false'
    answer3='false'
    result='one'
  />);
  const questionInstance = question.getInstance();
  const questionJSON = question.toJSON();

  // test 1
  it('select the second anwser', () => {
    questionInstance.twoPressed();
    expect(questionInstance.state).toEqual({
      one:false,
      two:true,
      three:false,
      correct:false,
      checked:false,
      key:''
    });
  });

  // test 2
  it('check result', () => {
    questionInstance.check('one');
    expect(questionInstance.state).toEqual({
      one:false,
      two:true,
      three:false,
      correct:false,
      checked:true,
      key:'one'
    });
  });

  // test 3
  it('renders correctly', () => {
    expect(questionJSON).toMatchSnapshot();
  });
})