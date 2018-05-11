import { combineReducers } from 'redux';
import { article } from "./article";
import { author } from "./author";

export default combineReducers({ article, author });
