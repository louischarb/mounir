import React from "react";
import { Projects } from "../../datas";
import {
  Title,
  Description,
  Category,
  Date,
  ProjectContainer,
  ProjectBackground,
  Breadcrumb,
  Row,
  CardContainer,
  CardTitle,
  CardText,
  Image,
  ImageContainer,
} from "./styles";
import { NewLine, Pagination, Footer } from "../";
import { IProject } from "../../types";

interface ProjectProps {
  actualSlide: number;
  previous: boolean;
  next: boolean;
  goNext: () => void;
  goPrevious: () => void;
}

export default (props: ProjectProps) => {
  const { actualSlide, previous, next, goNext, goPrevious } = props;
  const actualProject = Projects[actualSlide];
  const newProps: {
    actualSlide: number;
    previous: IProject | undefined;
    next: IProject | undefined;
    goNext: () => void;
    goPrevious: () => void;
  } = {
    actualSlide: actualSlide,
    previous: previous ? Projects[actualSlide - 1] : undefined,
    next: next ? Projects[actualSlide + 1] : undefined,
    goNext: goNext,
    goPrevious: goPrevious,
  };
  return (
    <ProjectContainer>
      <ProjectBackground background={actualProject?.image}></ProjectBackground>
      <Breadcrumb>Portfolio - Work - {actualProject.name}</Breadcrumb>
      <Row>
        <CardContainer>
          <CardTitle>CLIENT</CardTitle>
          <CardText>{actualProject.type}</CardText>
        </CardContainer>
        <CardContainer>
          <CardTitle>PROJECT DATE</CardTitle>
          <CardText>{actualProject.date}</CardText>
        </CardContainer>
        <CardContainer>
          <CardTitle>CATEGORY</CardTitle>
          <CardText>{actualProject.category}</CardText>
        </CardContainer>
      </Row>
      <Description>
        <NewLine text={actualProject.description} />
      </Description>
      <ImageContainer>
        {actualProject.images?.map((item, idx) => {
          return <Image key={idx} src={`./${item}`} />;
        })}
      </ImageContainer>
      <Pagination {...newProps} />
      <Footer />
    </ProjectContainer>
  );
};
