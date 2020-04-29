import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import TickerReducer from "./reducers/ticker.reducer";

const rootReducer = combineReducers({
  ticker: TickerReducer,
});

const initState = {
  ticker: {
    tick: 0,
  },
};

const logger = createLogger({ collapsed: true });
const middleware = [thunk, logger];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const storeRedux = createStore(rootReducer, initState, enhancer);

export default storeRedux;
