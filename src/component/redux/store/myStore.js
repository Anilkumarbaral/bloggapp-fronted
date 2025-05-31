import { legacy_createStore as createStore, applyMiddleware } from "redux";
import myReducer from "../reducer/myReducer";
const myStore = createStore(myReducer, applyMiddleware());
export default myStore;
