import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../Theme/index.theme';
import Home from '../../Components/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
