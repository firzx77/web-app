import { combineReducers } from "redux";
import layoutReducers from "./Layout";
import tableReducers from "./Table";
import modalsReducers from "./Modals";
import filterReducers from "./Filter";

export default combineReducers({
  layout: layoutReducers,
  table: tableReducers,
  modals: modalsReducers,
  filter: filterReducers
});
