import { Workbox } from 'workbox-window';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { loadable, isMobile } from './utils';
import { register } from './utils/storageCaches';
import theme from './variables/theme';

register();

const App = isMobile
  ? loadable(() => import('./App.mobile'))
  : loadable(() => import('./App'));

import store from './store';

const NhacTubeApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<NhacTubeApp />, document.getElementById('app'));


if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register();
}
