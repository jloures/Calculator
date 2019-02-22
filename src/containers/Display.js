import React from "react";
import { connect } from "react-redux";

//this should actually be a component, but I'm leaving space here
//in case we would like to add functionality to the display,
//which in this case would require it to be more aware of the state of the app
const Display = ({ expression }) => {
  return (
    <div className="display">
      <bdi>{expression}</bdi>
    </div>
  );
};

const mapStateToProps = state => ({
  expression: state.calculate.expression
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
