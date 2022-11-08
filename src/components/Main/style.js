import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1c2326;
  padding: 40px 0;
  font-family: "Kanit", sans-serif;

  padding-top: 30px;
  @media (max-width: 790px) {
    padding: 40px;
    height: 100%;
  }
  @media (max-height: 950px) {
    padding: 40px;
    height: 100%;
  }
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  letter-spacing: 0.365em;
  color: #ffffff;
  padding-top: 40px;
  margin-bottom: 100px;
  @media (max-width: 1190px) {
    margin-bottom: 40px;
  }
  @media (max-width: 850px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.365em;
  color: #ffffff;
  padding-top: 40px;
  @media (max-width: 1100px) {
    font-size: 28px;
  }
  @media (max-width: 850px) {
    font-size: 25px;
  }
  @media (max-width: 450px) {
    font-size: 22px;
  }
`;

export const MidWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 80px;
  @media (max-width: 1300px) {
    padding: 20px;
  }
  @media (max-width: 1190px) {
    flex-direction: column;
    gap: 55px;
    padding: 10px 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width: 710px) {
    flex-direction: column;
  }
`;

Box.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border-bottom: 3px solid
    ${({ type }) => (type === "born" ? "#ff005c" : "#FFA800")};
  height: 40px;
  @media (max-width: 450px) {
    font-size: 30px;
  }
`;

Box.Year = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 450px) {
    font-size: 30px;
  }
`;

export const FooterImg = styled.img`
  display: flex;
  align-items: center;
  margin: 50px auto;
  padding: 20px;
  @media (max-width: 1190px) {
    width: 100%;
    margin: -20px auto;
  }
`;

export const Wrap = styled.div`
  p {
    padding: 20px 40px;
    font-size: 45px;
    text-align: center;
    color: white;
    font-family: "Lobster", cursive;

    @media (max-width: 900px) {
      font-size: 25px;
    }
    @media (max-width: 500px) {
      padding: 20px 0px;
      font-size: 22px;
    }
    @media (max-width: 300px) {
      font-size: 15px;
    }
  }
`;
