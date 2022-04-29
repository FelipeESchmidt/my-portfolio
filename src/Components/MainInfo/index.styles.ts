import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 30vh;
  margin-left: 20%;
  height: 20vh;
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
