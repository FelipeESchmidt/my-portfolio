import * as React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

import ParallaxContext from '../../Contexts/ParallaxContext';

import { getYears, lifetime } from './index.constants';
import * as S from './index.styles';
import { useLifeTimeCalculator } from '../../Hooks/useLifeTimeCalculator';

function Lifetime({ offsetStartBase }: { offsetStartBase: number }) {
  const { calcSpeed, calcOffset } = useLifeTimeCalculator(offsetStartBase);

  return (
    <>
      {lifetime.map((item, i) => (
        <ParallaxLayer key={item.title} offset={calcOffset(i)} speed={calcSpeed(i)} factor={0}>
          <S.StyledLifetime>
            <S.StyledLifetimeItem odd={i % 2 === 1}>
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

export function LifetimeTop({ offsetStartBase }: { offsetStartBase: number }) {
  const speedOffsetDiff = 0.15;

  const { calcOffset } = useLifeTimeCalculator(offsetStartBase);
  const { parallax } = React.useContext(ParallaxContext);

  const years = getYears();

  const findYearOffset = (year: number): number => {
    const i = lifetime.findIndex((item) => item.year === year);
    return Math.trunc(i / 3) * 3;
  };

  const handleClick = (year: number) => {
    const offset = findYearOffset(year);
    parallax?.current.scrollTo(calcOffset(offset) - speedOffsetDiff);
  };

  return (
    <S.TopContainer>
      <S.StyledLifetimeTop>
        {years.map((year) => (
          <S.StyledYear onClick={() => handleClick(year)} key={year}>
            {year}
          </S.StyledYear>
        ))}
      </S.StyledLifetimeTop>
    </S.TopContainer>
  );
}

export default Lifetime;
