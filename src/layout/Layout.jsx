import * as React from "react";
import { Routes } from "../config/routes";
import { useHistory } from "react-router-dom";
import { FlexColumn, FlexRow } from "../style";

export const Layout = () => {
  let history = useHistory();

  return (
    <div>
      <FlexColumn>
        <FlexRow>
          <button onClick={() => history.push("/calendar")}>Kalendar</button>
          <button
            onClick={() => history.push("/daypicker")}
            style={{ marginLeft: "5px" }}
          >
            Unos datuma
          </button>
        </FlexRow>
      </FlexColumn>
      <Routes />
    </div>
  );
};
