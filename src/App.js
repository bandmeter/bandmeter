import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Jamrooms from './pages/jamrooms/Jamrooms';

class App extends Component {
  render() {
    return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/access' component={Login}/>
      <Route exact path='/jamrooms' component={Jamrooms}/>
    </Switch>
    );
  }
}

export default App;
