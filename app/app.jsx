import React from 'react';
import { render } from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import MainComponent from './components/Main';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent}>
    </Route>
  </Router>,
  document.getElementById('app')
);
