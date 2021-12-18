export const Inc = (num) => {
  return {
    type: "INC",
    payload: num,
  };
};

export const Dec = (num) => {
  return {
    type: "DEC",
    payload: num,
  };
};
