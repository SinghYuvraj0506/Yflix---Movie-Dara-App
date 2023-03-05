import React, { useEffect, useState } from 'react'
import "./Main.css"

import {fetchDataFromApi} from "../../Utils/api.js"
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../Utils/Lazy load images/Img'

function Main() {    
    const tmdbConfig = useSelector(state=>state.tmdbConfig)     // getting tmdb config from the redux
    const [selectedMovie, setSelectedMovie] = useState("")  // background image url
    const [queryInput, setQueryInput] = useState("")

    const {data,loading} = useFetch("/movie/upcoming")

    // selecting a random movie from the upcomming movies
    useEffect(() => {
        const bg = data?.results[Math.floor(Math.random()*20)]        // any random image for the background from upcoming movies
        setSelectedMovie(bg)

    }, [data])
    

  return (

    <div className="main_page_hero_section">
        <div className="backdrop_image">
            <Img src={tmdbConfig?.backDrop + selectedMovie?.backdrop_path}/>
        </div>

        <div className="opacityLayerBackground">
            {selectedMovie?.original_title + "," + selectedMovie?.release_date}
        </div>

    </div>

  )
}

export default Main