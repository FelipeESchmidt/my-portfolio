import React, { useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

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

  const handleMainClick = () => {
    window.open(showingProjects[main].link);
  };

  return (
    <S.StyledProjects>
      <S.StyledProjectMinor onClick={handlePrev} background={showingProjects[left].minor}>
        <AiFillLeftCircle />
      </S.StyledProjectMinor>
      <S.StyledProjectMain onClick={handleMainClick} background={showingProjects[1].main} />
      <S.StyledProjectMinor onClick={handleNext} background={showingProjects[right].minor}>
        <AiFillRightCircle />
      </S.StyledProjectMinor>
    </S.StyledProjects>
  );
}

export default Projects;
