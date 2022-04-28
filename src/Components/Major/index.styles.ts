import styled from 'styled-components';
const background = require('./assets/background.png');

export const StyledMajor = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;
