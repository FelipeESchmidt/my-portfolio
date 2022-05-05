import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { media768px } from '../../Styles/CommomStyles';

export const StyledHeader = styled.div`
  padding: 10px 0;
  ${media768px} {
    padding: 0;
  }
`;

export const StyledWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  ${media768px} {
    ${({ open }) => !open && 'display: none'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.black};
    z-index: 10;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  width: 50%;
  margin-left: 50%;
  justify-content: space-between;
  ${media768px} {
    z-index: 11;
    width: 100%;
    flex-direction: column;
    row-gap: 50px;
    margin: 0;
    text-align: center;
  }
`;

export const StyledLink = styled(animated.a)`
  color: ${({ theme }) => theme.white};
  font-size: 1.5em;
  font-weight: lighter;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.selected};
  }
  ${media768px} {
    position: relative;
    :before {
      content: '';
      position: absolute;
      left: 30%;
      right: 30%;
      bottom: -5px;
      height: 1px;
      background-color: ${({ theme }) => theme.white};
    }
  }
`;

const StyledIcon = css`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 35px;
  color: ${({ theme }) => theme.white};
  z-index: 12;
`;

export const StyledOpenMenuIcon = styled(HiMenu)`
  ${StyledIcon};
`;

export const StyledCloseMenuIcon = styled(IoMdClose)`
  ${StyledIcon};
`;
