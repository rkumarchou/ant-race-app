import React from "react";
import { useLazyQuery } from "@apollo/client";
import { FETCH_ANTS } from "../gqlQuery";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAnts } from "../actions";
import { resultData } from "../utils/helper";
import { Button } from "@mui/material";

const GetAnts = (props) => {
  const dispatch = useDispatch();
  const [getAntsData, { loading, error, data }] = useLazyQuery(FETCH_ANTS);
  let result = [];
  useEffect(() => {
    if (result.length > 0) {
      dispatch(addAnts(result));
    }
  }, [data]);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data && data.ants) {
    result = resultData(data);
  }
  return (
    <Button variant="contained" onClick={() => getAntsData()}>
      Get Ants
    </Button>
  );
};

export default GetAnts;
