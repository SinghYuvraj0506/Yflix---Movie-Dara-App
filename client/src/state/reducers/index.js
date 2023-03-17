
// this file is created to combine all the states in the redux 
import { combineReducers } from "redux";
import TMDBConfigReducer from "./TMDBConfigReducer.js"
import VideoReducer from "./VideoReducer.js"
import LoaderReducer from "./LoaderReducer.js"


const reducers = combineReducers({
    tmdbConfig : TMDBConfigReducer,          // config state of tmdb
    videoPopupConfig : VideoReducer,
    loaderConfig: LoaderReducer

})


export default reducers
