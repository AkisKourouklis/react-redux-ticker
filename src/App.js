import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  tickerAdd,
  tickerRemove,
  tickerReset,
} from "./store/actions/ticker.actions";

const App = () => {
  const dispatch = useDispatch();
  const ticker = useSelector((state) => state.ticker.tick);

  const toggleTickerAdd = () => {
    dispatch(tickerAdd());
  };
  const toggleTickerRemove = () => {
    dispatch(tickerRemove());
  };
  const toggleTickerReset = () => {
    dispatch(tickerReset());
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Ticker Value: {ticker}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" onClick={toggleTickerAdd}>
          TICKER +1
        </button>
        <button type="button" onClick={toggleTickerRemove}>
          TICKER -1
        </button>
        <button type="button" onClick={toggleTickerReset}>
          TICKER RESET
        </button>
      </div>
    </>
  );
};

export default App;
