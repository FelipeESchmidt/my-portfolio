import React, { useContext } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import ParallaxContext from '../../Contexts/ParallaxContext';

import light from './assets/light.png';

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;

function Example({ n }: any) {
  const { parallax } = useContext(ParallaxContext);
  return (
    <>
      <ParallaxLayer offset={3} factor={2} speed={1} style={{ backgroundColor: '#CCCC' }} />
      <ParallaxLayer offset={n + 2} speed={1} style={{ backgroundColor: '#805E73' }} />
      <ParallaxLayer offset={n + 3} speed={1} style={{ backgroundColor: '#87BCDE' }} />

      <ParallaxLayer
        offset={1}
        speed={0}
        factor={4}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer offset={1.8} speed={1} style={{ pointerEvents: 'none' }}>
        <img src={light} style={{ width: '15%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.1} speed={-2.5} style={{ pointerEvents: 'none', zIndex: -5 }}>
        <img src={light} style={{ width: '7%', marginLeft: '78%', opacity: 0.5 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={0.8} style={{ pointerEvents: 'none' }}>
        <img src={light} style={{ width: '5%', marginLeft: '92%', opacity: 0.4 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={n + 2} speed={0.8} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={n + 2.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={n + 2} speed={0.2} style={{ opacity: 0.2 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={n + 2.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={n + 3.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={n + 3.5}
        speed={-0.4}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <img src={url('earth')} style={{ width: '60%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={n + 3}
        speed={-0.3}
        style={{
          backgroundSize: '80%',
          backgroundPosition: 'center',
          backgroundImage: url('clients', true),
        }}
      />

      <ParallaxLayer
        offset={n + 1}
        speed={0.1}
        onClick={() => parallax?.current.scrollTo(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={url('server')} style={{ width: '20%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={n + 2}
        speed={0.1}
        onClick={() => parallax?.current.scrollTo(2)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={url('bash')} style={{ width: '40%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={n + 3}
        speed={-0}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => parallax?.current.scrollTo(0)}
      >
        <img src={url('clients-main')} style={{ width: '40%' }} />
      </ParallaxLayer>
    </>
  );
}

export default Example;
