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
            {links.map((link, i) => (
              <Spring
                key={i}
                delay={500 * i}
                config={{ duration: 2000 }}
                from={{ opacity: 0 }}
                to={[{ opacity: 1 }]}
              >
                {(styles: any) => (
                  <S.StyledLink href={`#${link.toLowerCase()}`} style={{ ...styles }}>
                    {link}
                  </S.StyledLink>
                )}
              </Spring>
            ))}
          </S.StyledLinks>
        </S.StyledWrapper>
      </Container>
    </S.StyledHeader>
  );
}

export default Header;
