import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { loadable } from './utils';
import GlobalStyle from './global-styles';
import Layout from './layout.mobile';

const HomePage = loadable(() => import('./pages/HomePage/HomePage.mobile'));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={HomePage} />
        </Switch>
        <GlobalStyle />
      </Layout>
    </BrowserRouter>
  );
};

App.displayName = 'App.mobile';
App.propTypes = {};
App.defaultProps = {};

export default App;
