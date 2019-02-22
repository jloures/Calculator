import React from "react";
import { connect } from "react-redux";

import { clearExpression } from "../actions/calculator.actions";

const Clear = ({ text, clearExpression }) => {
  return (
    <div onClick={() => clearExpression()} className="clear">
      {text}
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  clearExpression: () => dispatch(clearExpression())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clear);
