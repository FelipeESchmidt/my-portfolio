import React from 'react';
import { StackProps, stacks } from './index.constants';

import * as S from './index.styles';

const Stacks: React.FC = () => {
  const getPercentage = (goodAt: StackProps['goodAt']) => {
    if (goodAt === 'advanced') return 100;
    if (goodAt === 'intermediate') return 60;
    return 30;
  };

  return (
    <S.StyledStacks>
      {stacks.map((stack) => (
        <S.StyledStack key={stack.name} goodAt={stack.goodAt}>
          <S.StyledStackName>{stack.name}</S.StyledStackName>
          <S.StyledGoodAt percentage={getPercentage(stack.goodAt)} goodAt={stack.goodAt}>
            <span />
          </S.StyledGoodAt>
        </S.StyledStack>
      ))}
    </S.StyledStacks>
  );
};

export default Stacks;
