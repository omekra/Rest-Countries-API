import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { ThemeProvider } from '@material-ui/core/styles';
// import { theme, darkTheme } from '../src/styles/theme';
// import { Paper } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
      <Paper> */}
    <App />
    {/* </Paper>
    </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
