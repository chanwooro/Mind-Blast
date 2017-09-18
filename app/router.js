import React from 'react';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

// Pages
import Home from './components/home';
import about from './components/about';
import UserList from './components/user-list';
import UserProfile from './components/user-profile';
import WidgetList from './components/widget-list';

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="about">
          <IndexRoute component={about} />
      </Route>

      <Route path="users">
        <Route component={SearchLayout}>
          <IndexRoute component={UserList} />
        </Route>
        <Route path=":userId" component={UserProfile} />
      </Route>

      <Route path="widgets">
        <Route component={SearchLayout}>
          <IndexRoute component={WidgetList} />
        </Route>
      </Route>

    </Route>
  </Router>
);
