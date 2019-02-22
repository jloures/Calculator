import React from "react";
import { connect } from "react-redux";

import Number from "../components/Number";
import Operation from "../components/Operation";
import Clear from "../components/Clear";

const Keypad = () => {
  return (
    <div className="keypad">
      <Clear text="CLEAR" />
      {/*now we add the rows with the operations and numberas*/}
      {/*first row*/}
      <div className="keypad-row">
        <Number number="7" />
        <Number number="8" />
        <Number number="9" />
        <Operation operation={"÷"} />
      </div>

      {/*second row*/}
      <div className="keypad-row">
        <Number number="4" />
        <Number number="5" />
        <Number number="6" />
        <Operation operation={"×"} />
      </div>

      {/*third row*/}
      <div className="keypad-row">
        <Number number="1" />
        <Number number="2" />
        <Number number="3" />
        <Operation operation={"−"} />
      </div>

      {/*fourth row*/}
      <div className="keypad-row">
        <Number number="0" customClass="last-number" />
        <Operation operation={"+"} />
      </div>
    </div>
  );
};

export default Keypad;
