
// this file is created to combine all the states in the redux 
import { combineReducers } from "redux";
import TMDBConfigReducer from "./TMDBConfigReducer.js"
import VideoReducer from "./VideoReducer.js"


const reducers = combineReducers({
    tmdbConfig : TMDBConfigReducer,          // config state of tmdb
    videoPopupConfig : VideoReducer
})


export default reducers