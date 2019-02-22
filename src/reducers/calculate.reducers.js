const defaultState = {
  expression: null,
  result: ""
};

//I avoid passing the state as a whole because I want these
//functions to be pure. e.g same input === same output
const calculate = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        ...state,
        ...addNumber(state.result, state.expression, action.number)
      };
    case "ADD_OPERATION":
      return {
        ...state,
        ...addOperation(state.expression, action.operation)
      };
    case "CLEAR_EXPRESSION":
      return {
        ...state,
        expression: null,
        result: ""
      };
    default:
      return state;
  }
};

//helpers to aid in reducer calculations
const addOperation = (currentExpression, newOperation) => {
  let expression = currentExpression;

  //if expression is an empty string, only accept -+ (minus/plus signs)
  //as per my assumptions, this should function in the same way as the nodejs engine
  if (expression === null) {
    if (newOperation === "−" || newOperation === "+") {
      expression = "" + newOperation;
    } else return;
  } else {
    //these combinations of operations are not valid when
    //performed after each other without numbers
    let lastChar = expression.charAt(expression.length - 1);
    if (
      ((lastChar === "−" || lastChar === "+") &&
        (newOperation === "−" || newOperation === "+")) ||
      (lastChar === "÷" && newOperation === "÷")
    )
      return;
    expression += newOperation;
  }

  try {
    //lets try to see if this is a valid operation
    //adding one here to see if by adding a number next this is a valid operation
    const testExpression = mapExpression(expression + "1");
    eval(testExpression);
  } catch (err) {
    //in case something throws an error, lets just not accept the new operation
    expression = currentExpression;
  }

  return {
    expression
  };
};

const addNumber = (currentResult, currentExpression, number) => {
  let result = currentResult,
    expression = currentExpression || "";

  try {
    expression += number;
    const testExpression = mapExpression(expression);
    result = eval(testExpression) + ""; //converting into a string
    if (result.length > 10) {
      //convert it to exponential form so user can read it on the display
      result = Number(result).toExponential(8);
    }
  } catch (err) {
    result = currentResult;
    expression = currentExpression;
  }

  return {
    result,
    expression
  };
};

//I had to use special characters for the design to look the same as the one given
//this is just the mapping so that node knows what its dealing with
const mapExpression = expression => {
  return expression
    .split("")
    .map(char => {
      switch (char) {
        case "÷":
          return "/";
        case "−":
          return "-";
        case "×":
          return "*";
        case "+":
          return "+";
        default:
          return char;
      }
    })
    .join("");
};

export default calculate;
