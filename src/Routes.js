import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Otro from './components/home/Otro';
import Galeria from './components/galeria/GaleriaPage';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/otro" component={Otro}/>
      <Route path="/galeria" component={Galeria}/>
    </Switch>
  )
}

export default Routes
