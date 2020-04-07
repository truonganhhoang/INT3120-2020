import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Turns extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activeHeart = require("../../assets/icon/heart-active.png");
    const inactiveHeart = require("../../assets/icon/heart-inactive.png");
    const arrHeart = ["active", "active", "active"];
    const turn = this.props.myExam.turn;
    for (let i = 0; i < 3; i++) {
      if (i <= turn - 1) {
        arrHeart[i] = "active";
      } else {
        arrHeart[i] = "inactive";
      }
    }

    return (
      <View style={styles.heartsContainer}>
        <Image
          style={{ width: 16, height: 16 }}
          source={arrHeart[0] === "active" ? activeHeart : inactiveHeart}
        />
        <Image
          style={{ width: 16, height: 16 }}
          source={arrHeart[1] === "active" ? activeHeart : inactiveHeart}
        />
        <Image
          style={{ width: 16, height: 16 }}
          source={arrHeart[2] === "active" ? activeHeart : inactiveHeart}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    myExam: state.exams
  };
}

export default connect(mapStateToProps)(Turns);

const styles = StyleSheet.create({
  heartsContainer: {
    flexDirection: "row"
  }
});
