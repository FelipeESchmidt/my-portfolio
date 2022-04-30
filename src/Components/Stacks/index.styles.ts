import styled from 'styled-components';

export const StyledStacks = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 2em;
  margin-left: 20%;
  margin-top: 44.5vh;
`;

export const StyledStack = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.red};
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
