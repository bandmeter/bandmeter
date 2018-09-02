import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { PrivateRoute } from './components/common/PrivateRoute';

import Home from './pages/home/Home';
import Access from './pages/access/Access';
import Jamrooms from './pages/jamrooms/Jamrooms';
import Bands from './pages/bands/Bands';
import NewBand from './pages/bands/NewBand';

class App extends Component {
  render() {
    return(
    <Switch>
      <PrivateRoute exact path='/' component={Home}/>
      <Route exact path='/profile' component={Access}/>
      <Route exact path='/account' component={Access}/>
      <Route exact path='/sign-out' component={Access}/>

      <Route exact path='/access' component={Access}/>
      <Route exact path='/jamrooms' component={Jamrooms}/>
      <Route exact path='/bands' component={Bands}/>
      <Route exact path='/bands/new' component={NewBand} />
      <Route exact path='/bands/:id/edit' component={NewBand} />
    </Switch>
    );
  }
}

export default App;
