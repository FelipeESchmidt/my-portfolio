import styled from 'styled-components';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export const ArrowUp = styled(BsFillArrowUpCircleFill)`
  margin-left: 5%;
  font-size: 30px;
  color: ${({ theme }) => theme.selected};
  box-shadow: 0 0 5px 10px ${({ theme }) => theme.black},
    0 0 5px 5px ${({ theme }) => theme.selected};
  border-radius: 50%;
  cursor: pointer;
`;
