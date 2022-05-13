import * as React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

import { socials } from '../MainInfo/index.constants';
import { Social } from '../MainInfo/index.styles';
import Form from '../Form';

import * as S from './index.styles';

import me from './assets/me.png';

function Contact() {
  return (
    <>
      <ParallaxLayer offset={9.3} speed={-3.5} style={{ pointerEvents: 'none' }}>
        <S.StyledMiniContainer left={true}>
          <S.StyledText>Feel free to contact me</S.StyledText>
          <S.StyledLinks>
            {socials.map((social) => (
              <Social key={social.name} href={social.href} target="_blank">
                <social.icon />
              </Social>
            ))}
          </S.StyledLinks>
        </S.StyledMiniContainer>
      </ParallaxLayer>
      <ParallaxLayer offset={9.3} speed={-3.5} style={{ pointerEvents: 'none' }}>
        <S.StyledMiniContainer left={false}>
          <S.ImageWrapper>
            <S.Image src={me} />
          </S.ImageWrapper>
        </S.StyledMiniContainer>
      </ParallaxLayer>
      <ParallaxLayer offset={9.2} speed={3.5} style={{ pointerEvents: 'none' }}>
        <S.StyledBigContainer>
          <Form onSubmit={(e: any) => console.log(e)} />
        </S.StyledBigContainer>
      </ParallaxLayer>
    </>
  );
}

export default Contact;
