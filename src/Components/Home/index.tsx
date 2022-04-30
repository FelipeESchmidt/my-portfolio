import React from 'react';

import Header from '../Header';
import MainInfo from '../MainInfo';

import * as S from './index.styles';

function Home() {
  return (
    <>
      <S.StyledHome />
      <Header />
      <MainInfo />
    </>
  );
}

export default Home;
