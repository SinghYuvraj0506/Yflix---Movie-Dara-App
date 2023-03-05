export const setTMDBConfiguration = (data) =>{          // it is the action to set the config so that we can fetch the background posters easily ...............
    return (dispatch) =>{
        dispatch({
            type:"setConfigtmdb",
            payload:data
        })
    }

}