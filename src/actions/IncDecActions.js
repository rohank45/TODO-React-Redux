import axios from "axios";

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

//thunk setup
export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/products");
    console.log(res.data);

    dispatch({ type: "FETCH_PRODUCT", payload: res.data });
  };
};
