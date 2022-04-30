import React, { useContext } from 'react';
import { Spring } from 'react-spring';
import ParallaxContext from '../../Contexts/ParallaxContext';
import { Container } from '../../Styles/CommomStyles';
import { links } from './index.constants';
import * as S from './index.styles';

function Header() {
  const { parallax } = useContext(ParallaxContext);

  const handleClick = (i: number) => parallax?.current.scrollTo(i);

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
                  <S.StyledLink
                    onClick={() => handleClick(link.parallaxIndex)}
                    style={{ ...styles }}
                  >
                    {link.name}
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
