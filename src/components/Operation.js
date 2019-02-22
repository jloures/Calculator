import React from "react";
import { connect } from "react-redux";

import { addOperation } from "../actions/calculator.actions";

const Operation = ({ operation, addOperation, width, height }) => {
  return (
    <div onClick={() => addOperation(operation)} className="operation">
      {operation}
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addOperation: operation => dispatch(addOperation(operation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Operation);
