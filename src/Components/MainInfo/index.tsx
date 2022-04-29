import React from 'react';
import { Spring } from 'react-spring';
import Typical from 'react-typical';

import * as S from './index.styles';

function MainInfo() {
  const [renderDesc, SetRenderDesc] = React.useState(false);

  setTimeout(() => {
    SetRenderDesc(true);
  }, 5500);

  return (
    <S.StyledContainer>
      <Typical steps={["Sup, I'm Felipe Schmidt"]} wrapper={S.StyledName} />
      <Spring
        delay={3000}
        config={{ duration: 1000 }}
        from={{ opacity: 0, marginTop: '-10px' }}
        to={[{ opacity: 1, marginTop: '0' }]}
      >
        {(styles: any) => (
          <S.StyledDescription style={{ ...styles }}>
            I'm a Brazilian Front-end Developer
          </S.StyledDescription>
        )}
      </Spring>

      {renderDesc && (
        <Typical
          steps={[
            'Studying to became a FullStack Developer',
            1500,
            'Studying to became a Better Person',
            1500,
            'Studying to became a Better Professional',
            1500,
            'Studying to became a Computer Scientist',
            5000,
          ]}
          wrapper={S.StyledDescription}
          loop={Infinity}
        />
      )}
    </S.StyledContainer>
  );
}

export default MainInfo;
