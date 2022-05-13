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
    label: 'Nome',
    props: { type: 'text', id: 'name', name: 'name', autoComplete: 'off' },
  },
  {
    component: Input,
    label: 'Assunto',
    props: { type: 'text', id: 'subject', name: 'subject', autoComplete: 'off' },
  },
  {
    component: Textarea,
    label: 'Mensagem',
    props: { id: 'message', name: 'message' },
  },
];

export const startTopState = () => {
  const topState: { [key: string]: boolean } = {};
  inputs.forEach((input) => (topState[input.props.name] = false));
  return topState;
};
