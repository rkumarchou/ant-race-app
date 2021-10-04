const INITIAL_STATE = {
  antList: {},
  ants: false,
  status: 'not yet run',
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
        status: 'in progress',
        antList: action.payload,
      };

    case 'RECEIVE_CALCULATION':
      return {
        ...state,
        antList: state.antList.map((ant, i) =>
          i === action.payload.index
            ? {
                ...ant,
                status: 'calculated',
                calculation: action.payload.calculation,
              }
            : ant
        ),
      };
    case 'END_RACE':
      return {
        ...state,

        status: state.antList.some((el) => el.status === 'in progress')
          ? 'in progress'
          : 'all calculated',
      };

    case 'RESET_RACE':
      return {
        ...state,
        status: 'not yet run',
        antList: state.antList.map((ant) =>
          ant.status === 'calculated'
            ? { ...ant, status: 'not yet run', calculation: 0 }
            : ant
        ),
      };

    default:
      return state;
  }
};

export default ants;
