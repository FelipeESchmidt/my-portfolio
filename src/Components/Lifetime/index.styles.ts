import styled from 'styled-components';
import { media768px } from '../../Styles/CommomStyles';

export const TopContainer = styled.div`
  padding: 5vh 0;
  background-color: ${({ theme }) => theme.black};
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
  background-color: ${({ theme }) => theme.selected};
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.selected};
  ${media768px} {
    margin-left: 5%;
    width: 90%;
  }
`;

export const StyledYear = styled.div`
  position: relative;
  top: -20px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.selected};
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.selected};
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

export const StyledLifetimeItem = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  box-shadow: 0 3px 3px 1px ${({ theme }) => theme.darkGray};
  background-color: #3333;
  border-radius: 20px;
  > div:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  :nth-child(2n + 2) {
    flex-direction: row-reverse;
    > div:first-child {
      border-radius: 0;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  ${media768px} {
    height: auto;
  }
`;

export const StyledItemTitleAndYear = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  height: 100%;
  padding: 2%;
  background-color: ${({ theme }) => theme.selected};
  box-sizing: border-box;
`;

export const ItemYear = styled.span`
  font-size: 32px;
  font-weight: lighter;
  color: ${({ theme }) => theme.white};
`;

export const ItemTitle = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.white};
  text-align: center;
`;

export const StyledDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  height: 100%;
  padding: 2%;
  box-sizing: border-box;
`;

export const ItemDescription = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.white};
`;
