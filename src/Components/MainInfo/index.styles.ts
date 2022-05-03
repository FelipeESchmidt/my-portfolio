import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import { media768px } from '../../Styles/CommomStyles';

export const StyledContainer = styled.div`
  position: relative;
  height: calc(100% - 52px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  margin-left: 18%;
  ${media768px} {
    margin: 0 5%;
  }
`;

const text = css`
  font-weight: lighter;
  text-shadow: 0px 0px 3px ${({ theme }) => theme.black};
`;

export const StyledName = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 38px;
  letter-spacing: 2px;
  ${text};
  :after {
    display: none;
  }
  ${media768px} {
    font-size: 32px;
  }
`;

export const StyledDescription = styled(animated.p)`
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  letter-spacing: 1px;
  ${text};
`;

export const StyledSocials = styled.div`
  display: flex;
  column-gap: 1em;
  margin-top: 1em;
`;

export const Social = styled(animated.a)`
  font-size: 25px;
  color: ${({ theme }) => theme.white};
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme.selected};
  }
`;
