import React, { Component } from 'react';

import Home from './pages/home/Home';
import Access from './pages/access/Access';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

class App extends Component {
  mapStateToProps = (state, props) =>{
    return {
      user : state.user
    }
  }

  render() {
    return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/access' component={Access}/>
    </Switch>
    );
  }
}

export default connect(this.mapStateToProps)(App);
