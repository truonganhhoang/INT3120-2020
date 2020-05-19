import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//
import QuestionPractice from '../../screens/Question/QuestionPractice';
import QuestionSet from '../../screens/Question/QuestionSet';

//
const Stack = createStackNavigator();

export default function Question() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="QuestionPractice"
                component={QuestionPractice}
                options={{
                    title: 'Ôn tập câu hỏi',
                }}
            />
            <Stack.Screen
                name="QuestionSet"
                component={QuestionSet}
                options={{
                    title: 'Ôn tập khái niệm',
                }}
            />

        </Stack.Navigator>
    );
}

