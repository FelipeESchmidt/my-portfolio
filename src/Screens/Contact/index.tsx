import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../Theme/index.theme';
import Contact from '../../Components/Contact/wholePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contact />
    </ThemeProvider>
  );
}

export default App;
