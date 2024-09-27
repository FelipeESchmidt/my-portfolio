import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

import Home from '../../Components/Home';
import Stacks from '../../Components/Stacks';
import Details from '../../Components/Details';
import Contact from '../../Components/Contact';
import { theme } from '../../Theme/index.theme';
import Projects from '../../Components/Projects';
import ParallaxContext from '../../Contexts/ParallaxContext';
import Lifetime, { LifetimeTop } from '../../Components/Lifetime';
import { useResponsive } from '../../Hooks/useResponsive';

function App() {
  const isResponsive = useResponsive();
  const parallax = React.useRef<IParallax>(null!);
  return (
    <ThemeProvider theme={theme}>
      <ParallaxContext.Provider value={{ parallax }}>
        <Parallax ref={parallax} pages={isResponsive ? 10 : 11}>
          <ParallaxLayer offset={0} speed={0.2}>
            <Home />
          </ParallaxLayer>
          <ParallaxLayer offset={1.03} speed={-0.1} factor={2}>
            <Stacks />
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={0.2}>
            <Projects />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 5, end: 9.5 }} style={{ height: '200px' }}>
            <LifetimeTop offsetStartBase={5.2} />
          </ParallaxLayer>
          <Lifetime offsetStartBase={5.2} />
          <Contact />
          <Details n={3} />
        </Parallax>
      </ParallaxContext.Provider>
    </ThemeProvider>
  );
}

export default App;
