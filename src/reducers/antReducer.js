const INITIAL_STATE = {
  inProgress: false,
  notYetRun: true,
  antList: {},
  ants: false,
  status: 'notYetRun',
  calculationsByAnt: {},
};


const ants = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ANTS':
      return {
        ...state,
        ants: true,
        antList: action.payload,
      };
    case 'START_RACE':
      return {
        ...state,
        status: 'inProgress',
        antList: action.payload,
      };

    case 'RECEIVE_CALCULATION':
      return {
        ...state,
        antList: state.antList.map((ant, i) =>
          i === action.payload.index
            ? {
                ...ant,
                status: 'completed',
                calculation: action.payload.calculation,
              }
            : ant
        ),
      };
    case 'END_RACE':
      return {
        ...state,

        status: state.antList.some((el) => el.status === 'inProgress')
          ? 'inProgress'
          : 'completed',
      };

    case 'RESET_RACE':
      return {
        ...state,
        status: 'notYetRun',
        antList: state.antList.map((ant) =>
          ant.status === 'completed'
            ? { ...ant, status: 'not yet run', calculation: 0 }
            : ant
        ),
      };

    default:
      return state;
  }
};

export default ants;
