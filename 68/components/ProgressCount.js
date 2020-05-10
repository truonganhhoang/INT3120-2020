import React , {componentDidMount, componentWillUnmount} from 'react';
import { View, StyleSheet} from 'react-native'
import {Progress, H5, H4} from 'nachos-ui'

export default class ProgressCount extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              progressValue: 0.5
            };
          }
    componentDidMount() {
      this._interval = setInterval(
        () => {
          if (this.state.progressValue >= 1) {
            return this.setState({ progressValue: 0 })
          }
          this.setState({
            progressValue: this.state.progressValue + 0.01,
          })
        },
        80
      )
    }
  
    componentWillUnmount() {
      clearInterval(this._interval)
    }
  
    render() {
      return (
        <View>
           <H4>Example:</H4>
          <Progress
            progress={this.state.progressValue}
            style={styles.progressStyle}
          />
          <H5>
            Progress: {Math.round(this.state.progressValue * 100)}
          </H5>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    progressStyle: {
      margin: 15,
    }
  });
  