import styled from 'styled-components';
import background from './assets/background.png';

export const StyledMajor = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(50%);
  z-index: -1;
`;
