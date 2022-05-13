import * as React from 'react';
import { inputs, startTopState } from './index.constants';

import * as S from './index.styles';

function Form({ onSubmit }: any) {
  const [tops, setTops] = React.useState(startTopState());

  const handleTopsChange = (name: string, top: boolean) => setTops({ ...tops, [name]: top });

  const handleInputFocus = (name: string) => handleTopsChange(name, true);
  const handleInputBlur = (name: string, value: any) => handleTopsChange(name, !!value);

  return (
    <S.StyledContainer>
      {inputs.map((input) => (
        <S.InputContainer key={input.label}>
          <S.Label top={tops[input.props.name]} htmlFor={input.props.id}>
            {input.label}
          </S.Label>
          <input.component
            {...input.props}
            onFocus={() => handleInputFocus(input.props.name)}
            onBlur={(e: any) => handleInputBlur(input.props.name, e.target.value)}
          />
        </S.InputContainer>
      ))}
      <S.Button type="submit" onClick={onSubmit}>
        a
      </S.Button>
    </S.StyledContainer>
  );
}

export default Form;
