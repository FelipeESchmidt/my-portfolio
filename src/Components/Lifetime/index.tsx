import * as React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

import ParallaxContext from '../../Contexts/ParallaxContext';
import { useResponsive } from '../../Hooks/useResponsive';

import { getYears, lifetime } from './index.constants';
import * as S from './index.styles';

function Lifetime({ offsetStartBase }: { offsetStartBase: number }) {
  const isResponsive = useResponsive();

  const speedBase = isResponsive ? 0.33 : 0.4;
  const offsetBase = isResponsive ? 0.28 : 0.34;
  const offsetStart = isResponsive ? offsetStartBase - 0.1 : offsetStartBase;

  const calcOffset = (i: number) => offsetStart + (i % 3) * offsetBase + Math.trunc(i / 3);
  const calcSpeed = (i: number) => speedBase * (i % 3);

  return (
    <>
      {lifetime.map((item, i) => (
        <ParallaxLayer offset={calcOffset(i)} speed={calcSpeed(i)} factor={0}>
          <S.StyledLifetime>
            <S.StyledLifetimeItem key={item.title}>
              <S.StyledItemTitleAndYear>
                <S.ItemYear>{item.year}</S.ItemYear>
                <S.ItemTitle>{item.title}</S.ItemTitle>
              </S.StyledItemTitleAndYear>
              <S.StyledDescription>
                <S.ItemDescription>{item.description}</S.ItemDescription>
              </S.StyledDescription>
            </S.StyledLifetimeItem>
          </S.StyledLifetime>
        </ParallaxLayer>
      ))}
    </>
  );
}

export function LifetimeTop() {
  const { parallax } = React.useContext(ParallaxContext);
  const handleClick = (i: number) => {
    parallax?.current.scrollTo(5 + i * 0.23);
  };

  return (
    <S.TopContainer>
      <S.StyledLifetimeTop>
        {getYears().map((year, i) => (
          <S.StyledYear onClick={() => handleClick(i)} key={year}>
            {year}
          </S.StyledYear>
        ))}
      </S.StyledLifetimeTop>
    </S.TopContainer>
  );
}

export default Lifetime;
