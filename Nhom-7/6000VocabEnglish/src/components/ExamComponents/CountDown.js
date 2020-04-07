import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";

class CountDown extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.onTick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const second = this.props.myExam.second;
    if (this.props.myExam.failed || this.props.myExam.passExam) {
      clearInterval(this.interval);
    }
    const timeTextStyle = second <= 10 ? styles.dangerText : styles.timeText;
    return (
      <View>
        <Text style={timeTextStyle}>
          {Math.floor(second / 60)}:{Math.floor(second % 60)}
        </Text>
      </View>
    );
  }
}

function mapSecond(state) {
  return {
    myExam: state.exams
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTick: () => dispatch(actionCreators.tick())
  };
};

export default connect(mapSecond, mapDispatchToProps)(CountDown);

const styles = StyleSheet.create({
  timeText: {
    fontWeight: "bold",
    color: "orange",
    fontSize: 16
  },
  dangerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red"
  }
});
