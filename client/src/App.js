import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Apps from './components/Apps';
import AppView from './components/AppView.js';
import NoMatch from './components/NoMatch.js';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/apps" component={Apps} />
    <Route exact path="/apps/:id" component={AppView} />
    <Route component={NoMatch} />
  </Switch>
)


export default App;