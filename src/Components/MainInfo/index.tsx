import React from 'react';
import { Spring } from 'react-spring';
import Typical from 'react-typical';

import * as S from './index.styles';
import { socials, whatIAm, whoIAm, whoIWannaBe, whoIWannaBeTimes } from './index.constants';

function MainInfo() {
  const [renderDesc, SetRenderDesc] = React.useState(false);

  setTimeout(() => {
    SetRenderDesc(true);
  }, 5000);

  return (
    <S.StyledContainer>
      <Typical steps={[whoIAm]} wrapper={S.StyledName} />
      <Spring
        delay={3000}
        config={{ duration: 1000 }}
        from={{ opacity: 0, marginTop: '-10px' }}
        to={[{ opacity: 1, marginTop: '0' }]}
      >
        {(styles: any) => (
          <S.StyledDescription style={{ ...styles }}>{whatIAm}</S.StyledDescription>
        )}
      </Spring>

      {renderDesc && (
        <Typical
          steps={whoIWannaBe.map((w, i) => [w, whoIWannaBeTimes[i]]).flat()}
          wrapper={S.StyledDescription}
          loop={Infinity}
        />
      )}

      <S.StyledSocials>
        {socials.map((social, i) => (
          <Spring
            key={social.name}
            delay={8000 + 400 * i}
            config={{ duration: 200 * (i + 1) }}
            from={{ opacity: 0, display: 'none', transform: `translateY(-${5 * (i + 1)}px)` }}
            to={{ opacity: 1, display: 'block', transform: 'translateY(0)' }}
          >
            {(styles: any) => (
              <S.Social style={{ ...styles }} href={social.href} target="_blank">
                <social.icon />
              </S.Social>
            )}
          </Spring>
        ))}
      </S.StyledSocials>
    </S.StyledContainer>
  );
}

export default MainInfo;
