import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Home from './pages/home/Home';
import Access from './pages/access/Access';
import Jamrooms from './pages/jamrooms/Jamrooms';
import Bands from './pages/bands/Bands';

class App extends Component {
  render() {
    return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/access' component={Access}/>
      <Route exact path='/jamrooms' component={Jamrooms}/>
      <Route exact path='/bands' component={Bands}/>
    </Switch>
    );
  }
}

export default App;
