const initialState = 0;

const IncDec = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return state + action.payload;

    case "DEC":
      return state - action.payload;

    default:
      return state;
  }
};

export default IncDec;
