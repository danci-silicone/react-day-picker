import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import styled from "styled-components";

export const Calendar = () => {
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 700px;
  `;

  const Container = styled.div`
    grid-column: 2 / 7;
    grid-row: 1 / 4;
    @media only screen and (max-width: 600px) {
      margin-left: -105px;
      margin-top: 80px;
      width: 460px;
    }
  `;
  return (
    <Wrapper>
      <Container>
        <DayPicker
          initialMonth={new Date(2020, 3)}
          selectedDays={[
            new Date(2020, 3, 12),
            new Date(2020, 3, 2),
            {
              after: new Date(2020, 3, 20),
              before: new Date(2020, 3, 25),
            },
          ]}
          numberOfMonths={6}
        />
      </Container>
    </Wrapper>
  );
};
