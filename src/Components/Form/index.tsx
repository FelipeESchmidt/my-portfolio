import * as React from 'react';
import { inputs, startTopsState, startValuesState } from './index.constants';

import * as S from './index.styles';

function Form({ onSubmit }: any) {
  const [tops, setTops] = React.useState(startTopsState());
  const [values, setValues] = React.useState(startValuesState());

  const handleTopsChange = (name: string, top: boolean) => setTops({ ...tops, [name]: top });

  const handleInputFocus = (name: string) => handleTopsChange(name, true);
  const handleInputBlur = (name: string, value: any) => handleTopsChange(name, !!value);

  const handleInputChange = (name: string, value: any) => {
    if (!tops[name]) handleTopsChange(name, true);
    setValues({ ...values, [name]: value });
  };

  const isButtonEnable = (): boolean => {
    const inputValues = Object.values(values).map((inputValue) => !!inputValue);
    return inputValues.reduce((a, b) => !!a && !!b, true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isButtonEnable()) return;
    const payload = {
      ...values,
    };
    setTops(startTopsState());
    setValues(startValuesState());
    onSubmit(payload);
  };

  return (
    <S.StyledContainer>
      {inputs.map((input) => (
        <S.InputContainer key={input.label}>
          <S.Label top={tops[input.label]} htmlFor={input.props.id}>
            {input.label}
          </S.Label>
          <input.component
            {...input.props}
            disabled={true}
            value={values[input.label]}
            onFocus={() => handleInputFocus(input.label)}
            onBlur={(e: any) => handleInputBlur(input.label, e.target.value)}
            onChange={(e: any) => handleInputChange(input.label, e.target.value)}
          />
        </S.InputContainer>
      ))}
      <S.Button enable={isButtonEnable()} onClick={handleSubmit}>
        Contact
      </S.Button>
    </S.StyledContainer>
  );
}

export default Form;
