import styled, { css } from 'styled-components';

export const StyledProjects = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  margin-left: 5%;
`;

const basicProject = css`
  transition: 1s;
  background-position: center;
  background-size: cover;
  box-shadow: 0 2px 5px 1px ${({ theme }) => theme.black};
  cursor: pointer;
`;

const svgInsideProject = css`
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 1s;
    border-radius: 50%;
    font-size: 50px;
    color: ${({ theme }) => theme.selected};
    background-color: ${({ theme }) => theme.black};
  }
`;

const minorOnHover = css`
  :hover {
    filter: brightness(90%);
  }
`;

const mainOnHover = css`
  :hover {
    transform: scale(1.05);
  }
`;

export const StyledProjectMinor = styled.div<{ background: string }>`
  position: relative;
  width: 20%;
  padding-bottom: calc(9 / 16 * 20%);
  background: ${({ background }) => `url(${background})`};
  filter: brightness(70%);
  ${basicProject};
  ${svgInsideProject};
  ${minorOnHover};
`;

export const StyledProjectMain = styled.div<{ background: string }>`
  position: relative;
  width: 50%;
  padding-bottom: calc(9 / 16 * 50%);
  background: ${({ background }) => `url(${background})`};
  background-repeat: repeat-y;
  ${basicProject};
  ${mainOnHover};
`;

export const StyledStackName = styled.h3`
  color: ${({ theme }) => theme.white};
  text-align: center;
  letter-spacing: 1px;
`;

export const StyledGoodAt = styled.div<{ number: number }>`
  span {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 12px;
    margin: 8px 0;
    text-align: center;
    background-color: ${({ theme }) => theme.lightGray};
    border-radius: 5px;
    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      width: ${({ number }) => `calc(${number}%)`};
      margin-right: ${({ number }) => `calc(${100 - number}%)`};
      height: 100%;
      background-color: ${({ theme }) => theme.white};
      border-radius: 5px;
    }
  }
  display: flex;
  justify-content: space-between;
  top: 5px;
  position: relative;
`;
