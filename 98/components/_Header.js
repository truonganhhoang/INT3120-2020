import React from 'react';
import { Header } from 'react-native-elements';

export default function _Header({ title}) {
    return (
        <Header
            leftComponent={{ icon: 'navigate_before', color: '#fff' }}
            centerComponent={{ text: { title }, style: { color: '#fff' } }}
            rightComponent={{ icon: 'navigate_next', color: '#fff' }}
        />

    );
}
