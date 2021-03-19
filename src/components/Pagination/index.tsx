import React from "react";
import { Center, Container, Large } from "./styles";
import { IoAppsSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IProject } from "../../types";

interface PaginationProps {
  previous: IProject | undefined;
  next: IProject | undefined;
  goNext: () => void;
  goPrevious: () => void
}

export default ({ previous, next, goNext, goPrevious }: PaginationProps) => {
  return (
    <Container>
      <Large>
        {previous ? (
          <div onClick={goPrevious}>
          <FaChevronLeft style={{marginRight: 5}} size="0.7em" />
            {previous?.name}
          </div>
        ) : null}
      </Large>
      <Center>
        <IoAppsSharp size="2em" />
      </Center>
      <Large>
        {next ? (
          <div onClick={goNext}>
            {next?.name}
          <FaChevronRight style={{marginLeft: 5}} size="0.7em" />
          </div>
        ) : null}
      </Large>
    </Container>
  );
};
