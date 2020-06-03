import React from "react";
import renderer from "react-test-renderer";
import ListWords from "../screens/ListWords";

it("Test ListWords Screen", () => {
  const tree = renderer.create(<ListWords/>).toJSON();
  expect(tree).toMatchSnapshot();
});
