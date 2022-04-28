import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../Theme/index.theme';
import Major from '../../Components/Major';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Major />
    </ThemeProvider>
  );
}

export default App;
