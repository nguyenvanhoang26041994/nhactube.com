import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { loadable, isMobile } from './utils';
import GlobalAudio from './containers/GlobalAudio';
import theme from './variables/theme';
import App from './App';

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

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
