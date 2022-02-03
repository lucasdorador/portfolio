import { combineReducers } from "redux";

import reducerHome from "./Home/reducer";
import reducerAbout from "./About/reducer";

export default combineReducers({ reducerHome, reducerAbout });
