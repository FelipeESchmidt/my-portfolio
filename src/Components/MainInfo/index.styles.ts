import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import { media768px } from '../../Styles/CommomStyles';

export const StyledContainer = styled.div`
  position: relative;
  top: -52px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  margin-left: 18%;
  ${media768px} {
    top: 0;
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
`;
