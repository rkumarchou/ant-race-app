import React from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { startRace,resetRace } from "../actions";
import { list } from "../utils/helper";
import Loader from "./loader";

const StartAntRace = () => {
  const { antList, status } = useSelector((state) => state.ants);
  const dispatch = useDispatch();
  const start = () => {
    const updatedList = list(antList);
    dispatch(startRace(updatedList));
  };

  return (
    <>
      <div style={{ padding: "2%" }}>
        {status === "all calculated" ? (
          <Button variant="contained" onClick={() => dispatch(resetRace())}>
            Reset
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={status === "inProgress"}
            onClick={start}
          >
            Start Race
          </Button>
        )}
      </div>
      <div style={{ position: "fixed", right: "50%" }}>
        {status === "inProgress" && <Loader />}
      </div>
    </>
  );
};

export default StartAntRace;
