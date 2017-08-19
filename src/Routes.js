import React, { PropTypes } from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Otro from './components/home/Otro';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/otro" component={Otro}/>
    </Switch>
  )
}

export default Routes
