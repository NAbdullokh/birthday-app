import styled from "styled-components";

export const Container = styled.div``;

export const ContainerImg = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.5);
  position: relative;
  @media (max-width: 1000px) {
  }
`;

export const ContainerText = styled.p`
  padding: 0 20px;
  font-family: "Lobster", cursive;
  position: absolute;
  left: -80px;
  margin-top: 120px;
  width: 130%;
  @media (max-width: 1000px) {
    /* top: 0;
    left: 0; */
    width: 100%;
    /* font-size: 10px; */
  }
`;
