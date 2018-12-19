
import { createStore } from "redux";
import MoviesRedducer from "../Reducers/MoviesReducer"
const store = createStore (MoviesRedducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 
export default store;
