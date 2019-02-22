export const addOperation = operation => ({
  type: "ADD_OPERATION",
  operation
});

export const addNumber = number => ({
  type: "ADD_NUMBER",
  number
});

export const clearExpression = () => ({
  type: "CLEAR_EXPRESSION"
});
