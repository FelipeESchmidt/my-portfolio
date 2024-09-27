import React, { useContext } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import ParallaxContext from '../../Contexts/ParallaxContext';
import { useResponsive } from '../../Hooks/useResponsive';

import android from './assets/android.png';
import graduated from './assets/graduated.png';
import diploma from './assets/diploma.webp';
import eletric from './assets/eletric.png';
import light from './assets/light.png';
import baby from './assets/baby.png';
import c from './assets/c.png';
import php from './assets/php.png';
import node from './assets/node.png';
import html from './assets/html.png';
import ios from './assets/ios.png';
import react from './assets/react.png';
import jest from './assets/jest.png';
import storybook from './assets/storybook.png';
import javascript from './assets/javascript.png';
import typescript from './assets/typescript.png';
import cloud from './assets/cloud.svg';
import stars from './assets/stars.svg';

import { ArrowUp } from './index.styles';

function Details({ n }: any) {
  const { parallax } = useContext(ParallaxContext);
  const isResponsive = useResponsive();

  return (
    <>
      <ParallaxLayer
        offset={3}
        factor={2}
        speed={1}
        style={{ backgroundColor: '#5555', zIndex: -2 }}
      />

      <ParallaxLayer
        offset={1}
        speed={0}
        factor={4}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      />

      <ParallaxLayer
        offset={5}
        speed={0}
        factor={5}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      />

      <ParallaxLayer offset={1.8} speed={1} style={{ pointerEvents: 'none', zIndex: -5 }}>
        <img src={light} alt="" style={{ width: '12%', minWidth: '100px', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.1} speed={-2.5} style={{ pointerEvents: 'none', zIndex: -5 }}>
        <img
          src={light}
          alt=""
          style={{ width: '4%', minWidth: '65px', marginLeft: '78%', opacity: 0.3 }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={0.8} style={{ pointerEvents: 'none', zIndex: -5 }}>
        <img
          src={light}
          alt=""
          style={{ width: '6%', minWidth: '50px', marginLeft: '92%', opacity: 0.4 }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1, pointerEvents: 'none' }}>
        <img src={cloud} alt="" style={{ width: '20%', minWidth: '200px', marginLeft: '30%' }} />
        <img src={cloud} alt="" style={{ width: '10%', minWidth: '100px', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3.1}
        speed={0.2}
        style={{ opacity: 0.2, pointerEvents: 'none', zIndex: -2 }}
      >
        <img src={cloud} alt="" style={{ width: '10%', minWidth: '100px', marginLeft: '10%' }} />
        <img src={cloud} alt="" style={{ width: '20%', minWidth: '200px', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3.9}
        speed={0.5}
        style={{ opacity: 0.1, pointerEvents: 'none', zIndex: -2 }}
      >
        <img src={cloud} alt="" style={{ width: '12%', minWidth: '120px', marginLeft: '72%' }} />
        <img src={cloud} alt="" style={{ width: '20%', minWidth: '200px', marginLeft: '5%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={4.2} speed={0.4} style={{ opacity: 0.5, pointerEvents: 'none' }}>
        <img src={cloud} alt="" style={{ width: '20%', minWidth: '200px', marginLeft: '5%' }} />
        <img src={cloud} alt="" style={{ width: '15%', minWidth: '150px', marginLeft: '75%' }} />
      </ParallaxLayer>

      {!isResponsive && (
        <>
          <ParallaxLayer offset={5.2} speed={2.5} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img src={baby} alt="" style={{ width: '12%', minWidth: '150px', marginLeft: '7%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={5.8} speed={3} style={{ opacity: 0.6, pointerEvents: 'none' }}>
            <img
              src={eletric}
              alt=""
              style={{ width: '12%', minWidth: '150px', marginLeft: '80%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={6.5} speed={3} style={{ opacity: 0.3, pointerEvents: 'none' }}>
            <img
              src={graduated}
              alt=""
              style={{ width: '12%', minWidth: '150px', marginLeft: '6%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={7.3} speed={2} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img src={c} alt="" style={{ width: '6%', minWidth: '80px', marginLeft: '6%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={7.7} speed={2.5} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img src={html} alt="" style={{ width: '5%', minWidth: '80px', marginLeft: '82%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={7.8} speed={3} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img
              src={javascript}
              alt=""
              style={{ width: '6%', minWidth: '80px', marginLeft: '88%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={7.95} speed={3.5} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img src={php} alt="" style={{ width: '6%', minWidth: '80px', marginLeft: '8%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={7.8} speed={3.2} style={{ opacity: 0.6, pointerEvents: 'none' }}>
            <img src={node} alt="" style={{ width: '7%', minWidth: '80px', marginLeft: '6%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={8.4} speed={3} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img src={react} alt="" style={{ width: '6%', minWidth: '80px', marginLeft: '8%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={8.45} speed={2} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img
              src={typescript}
              alt=""
              style={{ width: '6%', minWidth: '80px', marginLeft: '83%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={8.8} speed={1.2} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img src={jest} alt="" style={{ width: '5%', minWidth: '80px', marginLeft: '9%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={8.8} speed={0.3} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img
              src={storybook}
              alt=""
              style={{ width: '6%', minWidth: '80px', marginLeft: '85%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={9.8} speed={1.2} style={{ opacity: 0.5, pointerEvents: 'none' }}>
            <img
              src={android}
              alt=""
              style={{ width: '8%', minWidth: '120px', marginLeft: '9%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={9.4} speed={0.7} style={{ opacity: 0.8, pointerEvents: 'none' }}>
            <img src={ios} alt="" style={{ width: '5%', minWidth: '80px', marginLeft: '81%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={9.2} speed={1.8} style={{ opacity: 0.7, pointerEvents: 'none' }}>
            <img
              src={diploma}
              alt=""
              style={{ width: '8%', minWidth: '120px', marginLeft: '9%' }}
            />
          </ParallaxLayer>
        </>
      )}

      <ParallaxLayer offset={isResponsive ? 9.92 : 10.92} speed={-4}>
        <ArrowUp onClick={() => parallax?.current.scrollTo(0)} />
      </ParallaxLayer>
    </>
  );
}

export default Details;
