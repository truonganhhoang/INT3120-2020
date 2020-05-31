import 'react-native';
import React from 'react';
 
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyCourses from '../src/components/screens/MyCourses';
 
describe('Testing', () => {
    it('should match to snapshot', ()=>{
        const snap = renderer.create(<MyCourses />);
        expect(snap).toMatchSnapshot();
    });
})
