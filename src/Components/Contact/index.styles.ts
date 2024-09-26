import styled, { css } from 'styled-components';
import { media768px } from '../../Styles/CommomStyles';
import navigator from './assets/navigator.svg';

const miniContainerPaddings = [0, '18%', 0, '2%', 0];

const getLeftMiniContainerPadding = () => miniContainerPaddings.join(' ').slice(0, -1);
const getRightMiniContainerPadding = () => miniContainerPaddings.reverse().join(' ').slice(0, -1);

export const StyledMiniContainer = styled.div<{ left: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 25%;
  height: 350px;
  margin-left: ${({ left }) => (left ? '10%' : '65%')};
  background-image: url(${navigator});
  background-size: cover;
  border-radius: 20px;
  z-index: 1;
  ${media768px} {
    width: ${({ left }) => (left ? '90%' : '25%')};
    height: 100px;
    border-radius: 5px;
    margin-left: ${({ left }) => (left ? '5%' : '70%')};
    ${({ left }) =>
      left
        ? css`
            justify-content: end;
          `
        : css`
            background: none;
            align-items: flex-end;
          `};
  }
`;

export const StyledBigContainer = styled.div`
  position: relative;
  width: 44%;
  height: 600px;
  margin-left: 28%;
  background-color: #424242;
  box-shadow: 5px 0 5px -4px ${({ theme }) => theme.dark},
    -5px 0 5px -4px ${({ theme }) => theme.dark};
  border-radius: 40px;
  pointer-events: none;
  z-index: 2;
  ${media768px} {
    width: 90%;
    margin-left: 5%;
  }
`;

export const StyledOverlayDisabled = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: not-allowed;
  border-radius: 40px;

  div {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    span {
      font-size: 2em;
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const WholePageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  margin-left: 10%;
  @media (max-width: 456px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const WholeContactWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  > .${StyledMiniContainer.styledComponentId} {
    margin: 0;
  }
  > .${StyledBigContainer.styledComponentId} {
    margin: 0;
  }
  ${media768px} {
    ${css`
      flex-direction: column;
      gap: 10px;
      > .${StyledMiniContainer.styledComponentId}:last-child {
        position: absolute;
        top: 6%;
        right: 5%;
      }
    `}
  }
`;

export const StyledText = styled.h3`
  padding: ${getLeftMiniContainerPadding()};
  font-weight: lighter;
  color: ${({ theme }) => theme.white};
  letter-spacing: 1px;
  ${media768px} {
    display: none;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4%;
  margin-top: 20px;
  padding: ${getLeftMiniContainerPadding()};
  pointer-events: all;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${getRightMiniContainerPadding()};
  margin-top: 30px;
  pointer-events: all;
  ${media768px} {
    margin: 0;
    width: 50%;
    min-width: 75px;
    align-items: flex-end;
    padding-right: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 12px 10px ${({ theme }) => theme.black}, 0 0 4px 2px ${({ theme }) => theme.white};
`;

export const BreadcrumbItem = styled.a`
  :before {
    content: '>';
    color: ${({ theme }) => theme.white};
    margin-right: 10px;
  }
  font-size: 1.2em;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
`;

export const Breadcrumb = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 10px;
  ${css`
    > .${BreadcrumbItem.styledComponentId}:first-child {
      :before {
        content: '';
      }
    }
    > .${BreadcrumbItem.styledComponentId}:last-child {
      color: ${({ theme }) => theme.selected};
    }
  `}
`;
