import { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from "react-day-picker/build/addons/MomentLocaleUtils";
import styled from "styled-components";

export const DayPicker = () => {
  const [date, setDate] = useState(new Date());

  const style = {
    width: 210,
    height: 36,
    borderRadius: 3,
    border: `1px solid gray`,
  };

  const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
    align-items: center;
  `;

  const viewDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year + "."].join(".");
  };

  return (
    <FlexColumn>
      <DayPickerInput
        inputProps={{ style: style }}
        formatDate={formatDate}
        parseDate={parseDate}
        format={"LL"}
        placeholder={`${formatDate(new Date(), "LL", "hr")}`}
        dayPickerProps={{
          locale: "hr",
          localeUtils: MomentLocaleUtils,
          showWeekNumbers: true,
          todayButton: "Danas",
        }}
        value={date || ""}
        onDayChange={(date) => setDate(date)}
      />
      <div style={{ marginTop: "10%" }}>{viewDate(date)}</div>
    </FlexColumn>
  );
};
