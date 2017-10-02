import React from 'react';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

// Pages
import Home from './components/home';
import about from './components/about';
import UserList from './components/user-list';
import experience from './components/experience';
import skill from './components/skill';
/*<Route path="skills">
        <Route component={SearchLayout}>
          <IndexRoute component={WidgetList} />
        </Route>
      </Route> */

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="about">
          <IndexRoute component={about} />
      </Route>

      <Route path="experiences">
        <Route component={experience}>
          <IndexRoute component={experience} />
        </Route>
        <Route path=":userId" component={experience} />
      </Route>

      <Route path="skills">
          <IndexRoute component={skill} />
      </Route>
      

    </Route>
  </Router>
);
