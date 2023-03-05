import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../Utils/api'


// now it will act like a custom hook to fetch anything----------------------------
function useFetch(url) {   

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setData(null)
        setLoading(true)
        setError(null)

        fetchDataFromApi(url).then(res=>{
            setLoading(false)
            setData(res)
        })
        .catch(err=>{
            setLoading(false)
            setError("Something went wrong!")
        })
    },[url])


  return {data,loading,error}
}

export default useFetch