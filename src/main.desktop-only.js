import { Workbox } from 'workbox-window';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { loadable } from './utils';
import GlobalAudio from './containers/GlobalAudio';
import theme from './variables/theme';
import store from './store';

const App =  loadable(() => import('./App'));

const NhacTubeApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <GlobalAudio />
    </Provider>
  );
};

ReactDOM.render(<NhacTubeApp />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register();
}
