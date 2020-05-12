import React from 'react';
import renderer from 'react-test-renderer';
import Exam from '../../Screens/Exam';

describe('test exam', () => {
  const exam = renderer.create(
  <Exam 
    navigation = {
      {
        navigate: jest.fn(),
        state: {
            params: {
                type: 'Part II'
            }
        }
      }
    }
  />);
  const examJSON = exam.toJSON();
  const examInstance = exam.getInstance();
  // test 1
  it('renders correctly', () => {
    expect(examJSON).toMatchSnapshot();
  });
})
