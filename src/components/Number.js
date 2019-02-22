import React from "react";
import { connect } from "react-redux";

import { addNumber } from "../actions/calculator.actions";

const Number = ({ number, addNumber, customClass }) => {
  const classes = (customClass || "") + " number";
  return (
    <div onClick={() => addNumber(number)} className={classes}>
      {number}
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addNumber: number => dispatch(addNumber(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Number);
