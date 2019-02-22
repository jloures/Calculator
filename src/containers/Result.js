import React from "react";
import { connect } from "react-redux";

//Leaving this as a container in case we would like to add
//more funtionality to it which involves it being aware of the state
//of the app
const Result = ({ result }) => {
  return <div className="result">{result}</div>;
};

const mapStateToProps = state => ({
  result: state.calculate.result
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
