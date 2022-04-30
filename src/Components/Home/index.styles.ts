import styled from 'styled-components';
import { media768px } from '../../Styles/CommomStyles';
import background from './assets/background.png';

export const StyledHome = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(50%);
  z-index: -1;
  ${media768px} {
    filter: brightness(80%);
  }
`;
