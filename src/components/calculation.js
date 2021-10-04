import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { runCalculation } from "../actions";

const Calculation = ({ ant, index }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (ant.status === "inProgress") {
      dispatch(runCalculation(ant, index));
    }
  }, [ant, index, dispatch]);

  return (
    <div>
      <p>{ant.calculation}</p>
    </div>
  );
}

export default Calculation;
