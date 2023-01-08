import React, { useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle, AiOutlineEye, AiOutlineGithub } from 'react-icons/ai';

import { projects } from './index.constants';
import * as S from './index.styles';

function Projects() {
  const left = 0;
  const main = 1;
  const right = 2;

  const [showingProjects, setShowingProjects] = useState(projects);

  const handlePrev = () => {
    const currentProjects = [...showingProjects];
    const poped = currentProjects.pop();
    poped && currentProjects.unshift(poped);
    setShowingProjects(currentProjects);
  };

  const handleNext = () => {
    const currentProjects = [...showingProjects];
    const shifted = currentProjects.shift();
    shifted && currentProjects.push(shifted);
    setShowingProjects(currentProjects);
  };

  const handleMainClick = (type: 'link' | 'repo') => {
    window.open(showingProjects[main][type]);
  };

  return (
    <S.StyledProjects>
      <S.StyledProjectMinor
        onClick={handlePrev}
        background={showingProjects[left].minor}
        left={true}
      >
        <AiFillLeftCircle />
      </S.StyledProjectMinor>
      <S.StyledProjectMainContainer>
        <S.StyledProjectMain background={showingProjects[main].main}>
          <S.StyledMainButtonWrapper left={true} onClick={() => handleMainClick('link')}>
            <AiOutlineEye />
          </S.StyledMainButtonWrapper>
          <S.StyledMainButtonWrapper left={false} onClick={() => handleMainClick('repo')}>
            <AiOutlineGithub />
          </S.StyledMainButtonWrapper>
        </S.StyledProjectMain>
        <S.StyledProjectDescription>
          {showingProjects[main].description}
        </S.StyledProjectDescription>
      </S.StyledProjectMainContainer>
      <S.StyledProjectMinor
        onClick={handleNext}
        background={showingProjects[right].minor}
        left={false}
      >
        <AiFillRightCircle />
      </S.StyledProjectMinor>
    </S.StyledProjects>
  );
}

export default Projects;
