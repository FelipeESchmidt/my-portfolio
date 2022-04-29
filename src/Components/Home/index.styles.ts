import styled from 'styled-components';
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
`;
