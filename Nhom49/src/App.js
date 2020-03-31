import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./screens/home/";
import Anatomy from "./screens/anatomy/";
import SideBar from "./screens/sidebar";

import Simple from "./screens/simple/";
import Passive from "./screens/passive/";
import Wish from "./screens/wish/";
import Conditional from "./screens/conditional/";
import Compare from "./screens/compare/";
import RelativeClause from "./screens/relativeclause/";
import TagQuestion from "./screens/tagquestion/";
import Rewrite from "./screens/rewrite/";

import Noun from "./screens/noun/";
import Verb from "./screens/verb/";
import Adjactive from "./screens/adjactive/";
import Adverb from "./screens/adverb/";
import Preposition from "./screens/preposition/";

const Drawer = createDrawerNavigator(
  {

    Home: { screen: Home },
    Anatomy: { screen: Anatomy },
  },
  {
    initialRouteName: "Anatomy",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },

    Simple: { screen: Simple },
    Passive: { screen: Passive },
    Wish: { screen: Wish },
    Conditional: { screen: Conditional },
    Compare: { screen: Compare },
    RelativeClause: { screen: RelativeClause },
    TagQuestion: { screen: TagQuestion },
    Rewrite: { screen: Rewrite },

    Noun: { screen: Noun },
    Verb: { screen: Verb },
    Adjactive: { screen: Adjactive },
    Adverb: { screen: Adverb },
    Preposition: { screen: Preposition },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
