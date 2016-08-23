import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Layout
import ExampleLayout from 'layout/example';

// UI
import ExampleComponent from 'ui/example';

const Site = (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route component={ExampleLayout}>
        <Route path="/" component={ExampleComponent} />
      </Route>
    </Router>
  </MuiThemeProvider>
);

render(Site, document.getElementById('app'));