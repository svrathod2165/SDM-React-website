import React from "react";
import styled from "styled-components";
import "./ProjectCard.css";

const ProjectWrapper = styled.div`
  height: 300px;
  border: 1px solid red;
  border-radius: 4px;
  margin: 15px;
`;

const ProjectHeading = styled.a``;

function ProjectCard() {
  return (
    <>
      <ProjectWrapper></ProjectWrapper>
    </>
  );
}

export default ProjectCard;
