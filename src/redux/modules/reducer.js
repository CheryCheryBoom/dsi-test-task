import { combineReducers } from "redux";

import main from "./main";

export default function() {
  const appReducer = combineReducers({
    main: main(),
  });

  return (state, action) => appReducer(state, action);
}