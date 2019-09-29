import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { loadable } from './utils';
import GlobalStyle from './global-styles';

const HomePage = loadable(() => import('./pages/HomePage/HomePage.mobile'));

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
