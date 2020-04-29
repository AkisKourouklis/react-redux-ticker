import actionTypes from "./action-types";

const tickerAddAction = () => ({
  type: actionTypes.TICKER_ADD,
});
const tickerRemoveAction = () => ({
  type: actionTypes.TICKER_REMOVE,
});
const tickerResetAction = (number) => ({
  type: actionTypes.TICKER_RESET,
  number,
});

export const tickerAdd = () => {
  return (dispatch) => {
    try {
      dispatch(tickerAddAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export const tickerRemove = () => {
  return (dispatch) => {
    try {
      dispatch(tickerRemoveAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export const tickerReset = () => {
  return (dispatch) => {
    try {
      dispatch(tickerResetAction(0));
    } catch (err) {
      console.log(err);
    }
  };
};
