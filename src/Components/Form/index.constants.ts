import { StyledComponent } from 'styled-components';
import { Input, Textarea } from './index.styles';

interface InputProps {
  component: StyledComponent<any, any, {}, never>;
  label: string;
  props: { [key: string]: string };
}

export const inputs: Array<InputProps> = [
  {
    component: Input,
    label: 'Name',
    props: { type: 'text', id: 'name', name: 'name', autoComplete: 'off' },
  },
  {
    component: Input,
    label: 'Email',
    props: { type: 'email', id: 'email', name: 'email', autoComplete: 'off' },
  },
  {
    component: Textarea,
    label: 'Message',
    props: { id: 'message', name: 'message' },
  },
];

export const startTopsState = () => {
  const topsState: { [key: string]: boolean } = {};
  inputs.forEach((input) => (topsState[input.label] = false));
  return topsState;
};

export const startValuesState = () => {
  const valuesState: { [key: string]: string } = {};
  inputs.forEach((input) => (valuesState[input.label] = ''));
  return valuesState;
};
