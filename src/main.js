import { Workbox } from 'workbox-window';
import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { loadable, isMobile } from './utils';
import { register } from './utils/storageCaches';
// import theme from './variables/theme';
import { useTheme } from './hooks';
import App from './App';

register();

// const App = isMobile
//   ? loadable(() => import('./App.mobile'))
//   : loadable(() => import('./App'));

import store from './store';

const AppWithTheme = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

const NhacTubeApp = () => {
  return (
    <Provider store={store}>
      <AppWithTheme />
    </Provider>
  );
};

ReactDOM.render(<NhacTubeApp />, document.getElementById('app'));


if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register();
}
