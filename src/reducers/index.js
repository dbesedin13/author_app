import { combineReducers } from "redux";

import authors from './authors';
import filter from './filter'

export default combineReducers({
    authors,
    filter
});