import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Bienbao from './Bienbaogiaothong.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "bienbao" component = {Bienbao} title = "bienbao" />
      </Scene>
   </Router>
)
export default Routes