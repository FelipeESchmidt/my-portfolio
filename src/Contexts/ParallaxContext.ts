import { IParallax } from '@react-spring/parallax';
import React, { MutableRefObject } from 'react';

interface ParallaxContextTypes {
  parallax: MutableRefObject<IParallax> | null;
}

const ParallaxContext = React.createContext<ParallaxContextTypes>({ parallax: null });

export default ParallaxContext;
