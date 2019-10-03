import { Workbox } from 'workbox-window';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { loadable } from './utils';
import theme from './variables/theme';
import store from './store';

const App =  loadable(() => import('./App.mobile'));

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
