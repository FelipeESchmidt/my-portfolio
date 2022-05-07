import styled, { css } from 'styled-components';
import { media768px } from '../../Styles/CommomStyles';

export const TopContainer = styled.div`
  padding: 5vh 0;
  ${media768px} {
    display: none;
  }
`;

export const StyledLifetimeTop = styled.div`
  display: flex;
  width: 60%;
  height: 1px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 2em;
  margin-left: 20%;
  background-color: ${({ theme }) => theme.info};
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.info};
  ${media768px} {
    width: 90%;
    margin-left: 5%;
  }
`;

export const StyledYear = styled.div`
  position: relative;
  top: -20px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.info};
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.info}, 0 0 10px 10px ${({ theme }) => theme.black};
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

export const StyledLifetime = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  row-gap: 4em;
  margin-left: 20%;
  ${media768px} {
    margin-left: 5%;
    width: 90%;
  }
`;

export const StyledLifetimeItem = styled.div<{ odd: boolean }>`
  display: flex;
  width: 100%;
  height: 180px;
  box-shadow: 0 3px 3px 1px ${({ theme }) => theme.darkGray};
  background-color: #3333;
  border-radius: 20px;
  flex-direction: ${({ odd }) => (odd ? 'row-reverse' : 'row')};
  > div:first-child {
    ${({ odd }) =>
      odd
        ? css`
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
          `
        : css`
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          `};
  }
  ${media768px} {
    height: auto;
    flex-direction: column;
    > div:first-child {
      border-radius: 20px;
    }
  }
`;

export const StyledItemTitleAndYear = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  padding: 2%;
  background-color: ${({ theme }) => theme.info};
  box-sizing: border-box;
  ${media768px} {
    flex-direction: row;
    width: 100%;
  }
`;

export const ItemYear = styled.span`
  font-size: 32px;
  font-weight: lighter;
  color: ${({ theme }) => theme.white};
  ${media768px} {
    font-size: 25px;
  }
`;

export const ItemTitle = styled.span`
  font-size: 2.5vh;
  color: ${({ theme }) => theme.white};
  text-align: center;
  ${media768px} {
    font-size: 20px;
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  padding: 2%;
  box-sizing: border-box;
  ${media768px} {
    width: 100%;
    padding: 3% 2%;
  }
`;

export const ItemDescription = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.white};
`;
