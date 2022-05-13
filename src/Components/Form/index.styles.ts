import styled, { css } from 'styled-components';

const baseFormStyles = css`
  outline: none;
  pointer-events: all;
  font-size: 22px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 40px 20px;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Label = styled.label<{ top?: boolean }>`
  color: #9e9e9e;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  cursor: text;
  transition: color 0.3s ease-out;
  transition: transform 0.3s ease-out, color 0.3s ease-out;
  transform-origin: 0% 100%;
  text-align: initial;
  ${({ top }) =>
    top
      ? css`
          transform: translate(2px, -25px) scale(0.8);
          transform-origin: 0 0;
        `
      : css`
          transform: translate(10px, 12px);
        `}
`;

const basicInputStyles = css`
  ${baseFormStyles}
  width: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.white};
  border-bottom: 2px solid ${({ theme }) => theme.black};
  box-shadow: 0 3px 4px 1px ${({ theme }) => theme.black};
  box-sizing: border-box;
  ::selection {
    background-color: ${({ theme }) => theme.selected};
    color: ${({ theme }) => theme.black};
  }
`;

export const Input = styled.input`
  ${baseFormStyles}
  ${basicInputStyles}
  height: 50px;
  line-height: 50px;
`;

export const Textarea = styled.textarea`
  ${baseFormStyles}
  ${basicInputStyles}
  height: 200px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
  resize: none;
`;

export const Button = styled.button`
  ${baseFormStyles};
  width: 100%;
  max-width: 300px;
`;
