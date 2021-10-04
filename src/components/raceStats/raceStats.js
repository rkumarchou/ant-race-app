import React from "react";
import { useSelector } from "react-redux";
import "./raceStats.css";

const RaceStats = (props) => {
  const { status } = useSelector((state) => state.ants);

  return (
    <div className="race-container">
      <h3>Race State: {status}</h3>
    </div>
  );
};

export default RaceStats;
