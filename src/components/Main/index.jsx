import React, { useState } from "react";
import {
  Box,
  CircleWrapper,
  Container,
  FooterImg,
  MidWrapper,
  ModalDes,
  Wrap,
} from "./style";
import img from "../../assets/footer.png";
import CountUp from "react-countup";

const Main = ({ day, hour, minute, second }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());
  const [birth, setBirth] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  // if (date == 9 && month !== 11) {
  //   setBirth(true);
  // } else {
  //   setBirth(true);
  // }

  return (
    <Container>
      {birth ? (
        <Container.Title>"С ДНЁМ РОЖДЕНИЯ!"</Container.Title>
      ) : (
        <Container.Title>Скоро ...</Container.Title>
      )}
      {birth === false ? <Container.Text>В</Container.Text> : ""}
      <MidWrapper>
        {birth ? (
          <Box>
            <Box.Title type="born">РОЗЖДЕНЬ</Box.Title>
            <Box.Year>
              <CountUp end={2007} duration={3} />
            </Box.Year>
          </Box>
        ) : (
          ""
        )}

        <CircleWrapper style={{ margin: "auto" }}>
          <figure className="chart" data-percent="25">
            <figcaption></figcaption>
            <p className="html">09</p>

            <svg width="200" height="200">
              <circle
                className="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
          </figure>

          <figure className="chart" data-percent="50">
            <figcaption></figcaption>
            <p className="css">11</p>

            <svg width="200" height="200">
              <circle
                className="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
          </figure>

          <figure className="chart" data-percent="75">
            <figcaption></figcaption>
            <p className="javascript">22</p>

            <svg width="200" height="200">
              <circle
                className="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
          </figure>
        </CircleWrapper>
        {birth ? (
          <Box>
            <Box.Title type="age">ВОЗРАСТ</Box.Title>
            <Box.Year>
              <CountUp end={year - 2007} duration={3} />
            </Box.Year>
          </Box>
        ) : (
          ""
        )}
      </MidWrapper>
      {birth === false ? (
        <>
          <Container.Text>Через: </Container.Text>
          <Container.Text>
            {day}
            Дней
          </Container.Text>
          <Container.Text>{hour} Часов</Container.Text>
          <Container.Text>{minute} Минутов</Container.Text>
          <Container.Text>{second} Секундов</Container.Text>
        </>
      ) : (
        ""
      )}
      {openModal && (
        <Wrap>
          {birth ? (
            <p>
              Поздравляю тебя с днюхой, желаю тебе счастья и здоровья, чтобы ты
              была очень красивой, позитивной и энергичной, и чтоб все твои
              мечты сбылись и в будущем чтоб поступила в хорошие вузы.
              ПОЗДРАВЛЯЮ!!! 🥳🥳🥳
            </p>
          ) : (
            ""
          )}
        </Wrap>
      )}
      {birth ? (
        <div onClick={() => setOpenModal(!openModal)} className="wrap">
          <button className="button">{openModal ? "Закрыть" : "ЖМИ"}</button>
        </div>
      ) : (
        ""
      )}
      {birth ? <FooterImg src={img} alt="img" /> : ""}
    </Container>
  );
};

export default Main;
