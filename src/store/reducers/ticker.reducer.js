import actionTypes from "../actions/action-types";
import update from "immutability-helper";

const initialState = {
  tick: 0,
};

const tickerAdd = (state) => {
  return update(state, {
    tick: { $set: state.tick + 1 },
  });
};
const tickerRemove = (state) => {
  return update(state, {
    tick: { $set: state.tick - 1 },
  });
};
const tickerReset = (state, action) => {
  return update(state, {
    tick: { $set: action.number },
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICKER_ADD:
      return tickerAdd(state);
    case actionTypes.TICKER_REMOVE:
      return tickerRemove(state);
    case actionTypes.TICKER_RESET:
      return tickerReset(state, action);
    default:
      return state;
  }
};

export default reducer;
