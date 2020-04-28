import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NewTask, NewLesson } from './index';

const SwitchLessonTask = createSwitchNavigator({
  NewTaskScreen: NewTask,
  NewLessonScreen: NewLesson,
});

export const AppSwitchLessonTask = createAppContainer(SwitchLessonTask);

class News extends React.Component {
  render() {
    return <AppSwitchLessonTask />;
  }
}

export default News;
