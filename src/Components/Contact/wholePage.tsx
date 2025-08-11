import * as React from 'react';

import { socials } from '../MainInfo/index.constants';
import { Social } from '../MainInfo/index.styles';
import Form from '../Form';

import * as S from './index.styles';

import me from './assets/me.jpg';

function WholeContactPage() {
  return (
    <S.WholePageWrapper>
      <S.Breadcrumb>
        <S.BreadcrumbItem href="/">Home</S.BreadcrumbItem>
        <S.BreadcrumbItem>Contact</S.BreadcrumbItem>
      </S.Breadcrumb>
      <S.WholeContactWrapper>
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

        <S.StyledBigContainer>
          <Form onSubmit={(info: any) => console.log(info)} />
          <S.StyledOverlayDisabled>
            <div>
              <span>Available in future</span>
            </div>
          </S.StyledOverlayDisabled>
        </S.StyledBigContainer>

        <S.StyledMiniContainer left={false}>
          <S.ImageWrapper>
            <S.Image src={me} />
          </S.ImageWrapper>
        </S.StyledMiniContainer>
      </S.WholeContactWrapper>
    </S.WholePageWrapper>
  );
}

export default WholeContactPage;
