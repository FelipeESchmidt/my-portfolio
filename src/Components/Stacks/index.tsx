import React from 'react';
import { stacks } from './index.constants';

import * as S from './index.styles';

function Stacks() {
  return (
    <S.StyledStacks>
      {stacks.map((stack) => (
        <S.StyledStack key={stack.name}>
          <S.StyledStackName>{`${stack.name} (${stack.goodAt})%`}</S.StyledStackName>
          <S.StyledGoodAt number={stack.goodAt}>
            <span />
          </S.StyledGoodAt>
        </S.StyledStack>
      ))}
    </S.StyledStacks>
  );
}

export default Stacks;
