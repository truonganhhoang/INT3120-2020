import 'react-native';
import React from 'react';
 
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import OutLog from '../src/components/components/OutLog';
 
describe('Testing', () => {
    it('should match to snapshot', ()=>{
        const snap = renderer.create(<OutLog />);
        expect(snap).toMatchSnapshot();
    });
})
