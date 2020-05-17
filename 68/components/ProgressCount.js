import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Progress, H5, H4 } from 'nachos-ui';

export default class ProgressCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0.5
    };
  }

  componentDidMount() {
    // eslint-disable-next-line consistent-return
    this.interval = setInterval(() => {
      const { progressValue } = this.state;
      if (progressValue >= 1) {
        return this.setState({ progressValue: 0 });
      }
      this.setState({
        progressValue: progressValue + 0.01,
      });
    }, 80);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { progressValue } = this.state;
    return (
      <View>
        <H4>Example:</H4>
        <Progress
          progress={progressValue}
          style={styles.progressStyle}
        />
        <H5>
          Progress:
          {' '}
          {Math.round(progressValue * 100)}
        </H5>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  progressStyle: {
    margin: 15,
  }
});
