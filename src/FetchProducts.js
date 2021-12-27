import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./actions/IncDecActions";

const FetchProducts = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.IncDec.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {value?.map((curElem) => {
        return (
          <div>
            <p>{curElem.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FetchProducts;
