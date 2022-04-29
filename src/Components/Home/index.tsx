import React from 'react';

import Header from '../Header';
import { links } from '../Header/index.constants';
import MainInfo from '../MainInfo';

import * as S from './index.styles';

function Home() {
  return (
    <>
      <S.StyledHome id={links[0].toLocaleLowerCase()} />
      <Header />
      <MainInfo />
    </>
  );
}

export default Home;
