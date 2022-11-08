import React from "react";
import paper from "../../assets/paper.png";
import { Container, ContainerImg, ContainerText } from "./style";

const Modal = () => {
  return (
    <Container>
      <ContainerImg src={paper} alt="" />
      <ContainerText>
        Привет поздравляю с днём родждения, желаю счастья , любви и чтоб была
        всегда такой красивой и позитивной, окочила школу на хорошые оценки и
        чтоб все твои мечты сбылись.
      </ContainerText>
    </Container>
  );
};

export default Modal;
