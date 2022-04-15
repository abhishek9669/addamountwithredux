import { createStore } from "redux";
import rootreduser from "../Reduser/reduser";


const store = createStore(rootreduser,10000);
export default store;