import React from 'react';
import ReactDOM from 'react-dom';

import App from './Screens/Home';
import GlobalStyle from './Styles/GlobalStyles';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
