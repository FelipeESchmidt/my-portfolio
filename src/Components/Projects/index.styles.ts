import styled, { css } from 'styled-components';
import { media768px } from '../../Styles/CommomStyles';

export const StyledProjects = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  margin-left: 5%;
  ${media768px} {
    position: relative;
    width: auto;
    margin: 0 2%;
  }
`;

const basicProject = css`
  transition: 1s;
  background-position: center;
  background-size: cover;
  box-shadow: 0 2px 5px 1px ${({ theme }) => theme.black};
  border-radius: 10px;
  cursor: pointer;
  ${media768px} {
    border-radius: 0;
  }
`;

const svgInsideProject = css`
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 1s;
    border-radius: 50%;
    padding: 1px;
    font-size: 50px;
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.white};
  }
`;

const invertsvgInsideProject = css`
  ${svgInsideProject};
  > svg {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
  }
`;

const responsiveSvgInsideProject = css`
  > svg {
    font-size: 40px;
  }
`;

const minorOnHover = css`
  :hover {
    filter: brightness(90%);
  }
`;

const mainOnHover = css`
  :hover {
    transform: scale(1.1);
    z-index: 1;
    & ~ h4 {
      bottom: -1vh;
    }
  }
`;

export const StyledProjectMinor = styled.div<{ background: string; left: boolean }>`
  position: relative;
  width: 20%;
  padding-bottom: calc(9 / 16 * 20%);
  background: ${({ background }) => `url(${background})`};
  filter: brightness(40%);
  ${basicProject};
  ${svgInsideProject};
  ${minorOnHover};
  ${media768px} {
    position: absolute;
    ${({ left }) => (left ? 'left: 0' : 'right: 0')};
    top: -50px;
    width: 50%;
    padding-bottom: 50px;
    background: none;
    box-shadow: none;
    filter: none;
    border: 1px solid ${({ theme }) => theme.black};
    background-color: ${({ theme }) => `${theme.white}33`};
    box-sizing: border-box;
    ${responsiveSvgInsideProject};
    border-radius: 0;
    :first-child {
      border-top-left-radius: 10px;
    }
    :last-child {
      border-top-right-radius: 10px;
    }
  }
`;

export const StyledProjectMainContainer = styled.div`
  position: relative;
  width: 50%;
  ${media768px} {
    width: 100%;
    :hover {
      transform: none;
    }
  }
`;

export const StyledProjectMain = styled.div<{ background: string }>`
  position: relative;
  width: 100%;
  padding-bottom: calc(9 / 16 * 100%);
  background: ${({ background }) => `url(${background})`};
  background-repeat: repeat-y;
  z-index: 10;
  ${basicProject};
  ${mainOnHover};
`;

export const StyledProjectDescription = styled.h4`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  padding-left: 2vw;
  padding-block: 2vh;
  font-size: min(1.5vw, 16px);
  background-color: ${({ theme }) => `${theme.black}88`};
  border-radius: 10px;
  transition: 1s;
  z-index: 15;
  user-select: none;
  pointer-events: none;
  ${media768px} {
    margin-bottom: 0;
    margin-top: 6vh;
    font-size: max(2.5vw, 12px);
  }
`;

const svgInsideMajorProject = css`
  ${invertsvgInsideProject};
  opacity: 0;
  transition: 1s;
`;

export const StyledMainButtonWrapper = styled.div<{ left: boolean }>`
  position: absolute;
  width: 50%;
  ${({ left }) => (left ? 'left: 0' : 'right: 0')};
  height: 100%;
  transition: 0.5s;
  ${svgInsideMajorProject};
  :hover {
    opacity: 1;
    background-color: #5555;
  }
  ${media768px} {
    opacity: 1;
    bottom: -50px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.black};
    background-color: ${({ theme }) => `${theme.white}33`};
    box-sizing: border-box;
    ${responsiveSvgInsideProject};
    :first-child {
      border-bottom-left-radius: 10px;
    }
    :last-child {
      border-bottom-right-radius: 10px;
    }
  }
`;
