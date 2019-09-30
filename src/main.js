import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { loadable, isMobile } from './utils';
import GlobalAudio from './containers/GlobalAudio';
import theme from './variables/theme';

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
      <GlobalAudio />
    </Provider>
  );
};

ReactDOM.render(<NhacTubeApp />, document.getElementById('app'));


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
