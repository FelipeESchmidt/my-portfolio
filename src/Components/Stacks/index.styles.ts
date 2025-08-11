import styled from 'styled-components';
import { media425px, media768px } from '../../Styles/CommomStyles';
import { StackProps } from './index.constants';

export const StyledStacks = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 2em;
  margin-left: 20%;
  margin-top: 44.5vh;
  ${media768px} {
    margin-left: 5%;
    width: 90%;
  }
  ${media425px} {
    margin-left: 2%;
    width: 96%;
    justify-content: space-between;
  }
`;

export const StyledStack = styled.div<{ goodAt: StackProps['goodAt'] }>`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px ${({ theme, goodAt }) => theme[goodAt] || theme.red};
  ${media768px} {
    padding: 2%;
  }
  ${media425px} {
    width: 45%;
  }
`;

export const StyledStackName = styled.h3`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
`;

export const StyledGoodAt = styled.div<{ percentage: number; goodAt: StackProps['goodAt'] }>`
  display: flex;
  justify-content: space-between;
  top: 5px;
  position: relative;

  span {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 18px;
    margin: 8px 0;
    text-align: center;
    background-color: ${({ theme }) => theme.lightGray};
    border-radius: 5px;
    z-index: 3;

    :before {
      content: '${({ goodAt }) => goodAt}';
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      text-transform: capitalize;
      font-size: 12px;
      font-weight: 600;
      color: ${({ theme }) => theme.white};
      width: ${({ percentage }) => `calc(${percentage}%)`};
      margin-right: ${({ percentage }) => `calc(${100 - percentage}%)`};
      height: 100%;
      background-color: ${({ theme, goodAt }) => theme[goodAt] || theme.white};
      border-radius: 5px;
    }
  }
`;
