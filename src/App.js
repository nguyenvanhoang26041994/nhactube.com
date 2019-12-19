import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { loadable } from './utils';
import GlobalStyle from './global-styles';
import Layout from './layout';

const HomePage = loadable(() => import('./pages/HomePage'));
const SearchPage = loadable(() => import('./pages/SearchPage'));
const SongDetailPage = loadable(() => import('./pages/SongDetailPage'));
const ArtistDetailPage = loadable(() => import('./pages/ArtistDetailPage'));
const PlaylistDetailPage = loadable(() => import('./pages/PlaylistDetailPage'));
const ChartMusicPage = loadable(() => import('./pages/ChartMusicPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/song/:id" component={SongDetailPage} />
          <Route exact path="/artist/:id" component={ArtistDetailPage} />
          <Route exact path="/playlist/:id" component={PlaylistDetailPage} />
          <Route exact path="/bxh" component={ChartMusicPage} />
          <Route path="" component={HomePage} />
        </Switch>
        <GlobalStyle />
      </Layout>
    </BrowserRouter>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
