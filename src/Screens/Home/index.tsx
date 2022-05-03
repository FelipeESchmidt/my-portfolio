import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

import { theme } from '../../Theme/index.theme';
import Home from '../../Components/Home';
import Stacks from '../../Components/Stacks';
import ParallaxContext from '../../Contexts/ParallaxContext';
import Details from '../../Components/Details/paralax.example';
import Projects from '../../Components/Projects';

function App() {
  const parallax = React.useRef<IParallax>(null!);
  return (
    <ThemeProvider theme={theme}>
      <ParallaxContext.Provider value={{ parallax }}>
        <Parallax ref={parallax} pages={4.3}>
          <ParallaxLayer offset={0} speed={0.2}>
            <Home />
          </ParallaxLayer>
          <ParallaxLayer offset={1.03} speed={-0.1} factor={2}>
            <Stacks />
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={0.2}>
            <Projects />
          </ParallaxLayer>
          <Details n={3} />
        </Parallax>
      </ParallaxContext.Provider>
    </ThemeProvider>
  );
}

export default App;
