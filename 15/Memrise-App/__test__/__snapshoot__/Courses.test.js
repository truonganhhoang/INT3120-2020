import React from "react";
import renderer from "react-test-renderer";
import Courses from "../../screens/Courses";

it("Test courses Screen", () => {
  const tree = renderer.create(<Courses />).toJSON();
  expect(tree).toMatchSnapshot();
});
