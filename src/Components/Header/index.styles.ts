import { animated } from 'react-spring';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding: 10px 0;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLinks = styled.div`
  display: flex;
  width: 40%;
  margin-left: 60%;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(animated.a)`
  color: ${({ theme }) => theme.white};
  font-size: 1.5em;
  font-weight: lighter;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.selected};
  }
`;
