import {
  ADD_ANTS,
  START_RACE,
  END_RACE,
  RECEIVE_CALCULATION,
  RESET_RACE,
} from "./constants";
import { generateAntWinLikelihoodCalculator } from "../utils/generateAntWinLikelihoodCalculator";

export const addAnts = (data) => {
  return {
    type: ADD_ANTS,
    payload: data,
  };
};

export const startRace = (data) => {
  return {
    type: START_RACE,
    payload: data,
  };
};

export const endRace = () => {
  return {
    type: END_RACE,
  };
};

export const resetRace = () => {
  return {
    type: RESET_RACE,
  };
};

export const receiveCalculation = (index, calculation) => {
  return {
    type: RECEIVE_CALCULATION,
    payload: { index, calculation },
  };
};

const calculating = (state, ant) => {
  if (ant.calculation > 0) {
    return false;
  }

  return true;
};

const calculate = (ant) => {
  return new Promise((resolve) => {
    resolve(ant);
  });
};

const getCalculation = (ant, index) => (dispatch) => {
  const generateCalculation = generateAntWinLikelihoodCalculator();

  return generateCalculation((ant) => {
    calculate(ant).then((calculation) => {
      dispatch(receiveCalculation(index, calculation));
      dispatch(endRace());
    });
  });
};

export const runCalculation = (ant, index) => (dispatch, getState) => {
  if (calculating(getState(), ant)) {
    return dispatch(getCalculation(ant, index));
  }
};
