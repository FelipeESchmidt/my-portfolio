import styled from 'styled-components';
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
`;

export const StyledBigContainer = styled.div`
  width: 44%;
  height: 600px;
  margin-left: 28%;
  background-color: #424242;
  box-shadow: 5px 0 5px -4px ${({ theme }) => theme.dark},
    -5px 0 5px -4px ${({ theme }) => theme.dark};
  border-radius: 40px;
  pointer-events: none;
  z-index: 2;
`;

export const StyledText = styled.h3`
  padding: ${getLeftMiniContainerPadding()};
  font-weight: lighter;
  color: ${({ theme }) => theme.white};
  letter-spacing: 1px;
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
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 12px 10px ${({ theme }) => theme.black}, 0 0 4px 2px ${({ theme }) => theme.white};
`;
