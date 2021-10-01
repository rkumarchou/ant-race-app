const INITIAL_STATE = {
    inProgress: false,
    notYetRun: true,
    antList: {},
    ants: false,
    calculationsByAnt: {},
    };
    
    const ants = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case "ADD_ANTS":
    return {
    ...state,
    ants: true,
    antList: action.payload,
    };
    default:
    return state;
    }
    };
    
    export default ants;