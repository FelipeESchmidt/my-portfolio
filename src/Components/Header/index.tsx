import React from 'react';
import { Spring } from 'react-spring';
import { Container } from '../../Styles/CommomStyles';
import { links } from './index.constants';
import * as S from './index.styles';

function Header() {
  return (
    <S.StyledHeader>
      <Container>
        <S.StyledWrapper>
          <S.StyledLinks>
            {links.map((link) => (
              <Spring config={{ duration: 2500 }} from={{ opacity: 0 }} to={[{ opacity: 1 }]}>
                {(styles: any) => <S.StyledLink style={{ ...styles }}>{link}</S.StyledLink>}
              </Spring>
            ))}
          </S.StyledLinks>
        </S.StyledWrapper>
      </Container>
    </S.StyledHeader>
  );
}

export default Header;
