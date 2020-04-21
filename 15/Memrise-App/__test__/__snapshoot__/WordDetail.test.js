import React from "react";
import renderer from "react-test-renderer";
import WordDetail from "../../screens/WordDetail";

it("Test WordDetail Screen", () => {
  const tree = renderer.create(<WordDetail/>).toJSON();
  expect(tree).toMatchSnapshot();
});
