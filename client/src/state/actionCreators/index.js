export const setTMDBConfiguration = (data) =>{          // it is the action to set the config so that we can fetch the background posters easily ...............
    return (dispatch) =>{
        dispatch({
            type:"setConfigtmdb",
            payload:data
        })
    }

}

export const setVideoConfig = (data) =>{          // set the video config and the opening state ...............
    return (dispatch) =>{
        dispatch({
            type:"setVideoConfig",
            payload:data
        })
    }

}

export const setLoaderOpening = (bool) =>{          // set the loader and the opening state ...............
    return (dispatch) =>{
        dispatch({
            type:"setLoader",
            payload:bool
        })
    }

}
