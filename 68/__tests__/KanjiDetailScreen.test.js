import React from 'react';
import KanjiFlashCard  from '../screens/KanjiTests'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const rendered = renderer.create(<KanjiFlashCard />).toJSON();
    expect(rendered).toMatchSnapshot();
});