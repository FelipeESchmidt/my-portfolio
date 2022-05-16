import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spring } from 'react-spring';
import ParallaxContext from '../../Contexts/ParallaxContext';
import { useResponsive } from '../../Hooks/useResponsive';
import { Container } from '../../Styles/CommomStyles';
import { LinkProps, links } from './index.constants';
import * as S from './index.styles';

function Header() {
  let navigate = useNavigate();
  const { parallax } = useContext(ParallaxContext);

  const isResponsive = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link: LinkProps) => {
    if (!isResponsive || (isResponsive && !link.linkTo))
      parallax?.current.scrollTo(link.parallaxIndex);
    else if (link.linkTo) navigate(link.linkTo);
    setMenuOpen(false);
  };

  const handleIconClick = () => setMenuOpen(!menuOpen);

  const renderIcon = () =>
    menuOpen ? (
      <S.StyledCloseMenuIcon onClick={handleIconClick} />
    ) : (
      <S.StyledOpenMenuIcon onClick={handleIconClick} />
    );

  return (
    <S.StyledHeader>
      <Container>
        {isResponsive && renderIcon()}
        <S.StyledWrapper open={menuOpen}>
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
                  <S.StyledLink onClick={() => handleLinkClick(link)} style={{ ...styles }}>
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
