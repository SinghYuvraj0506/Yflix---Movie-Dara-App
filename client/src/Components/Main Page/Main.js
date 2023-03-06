import React, { useEffect, useState } from "react";
import "./Main.css";

import { fetchDataFromApi } from "../../Utils/api.js";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../Utils/Lazy load images/Img";
import Navbar from "../Navbar/Navbar";
import Card from "../Movie Cards/Card";

function Main() {
  const tmdbConfig = useSelector((state) => state.tmdbConfig); // getting tmdb config from the redux
  const [selectedMovie, setSelectedMovie] = useState(""); // background image url
  const [releaseDate, setReleaseDate] = useState("")
  const [queryInput, setQueryInput] = useState("");

  const { data, loading } = useFetch("/movie/upcoming");

  // selecting a random movie from the upcomming movies
  useEffect(() => {
    const bg = data?.results[Math.floor(Math.random() * 20)]; // any random image for the background from upcoming movies
    setSelectedMovie(bg);
    let a = new Date(bg?.release_date)
    setReleaseDate(a?.toGMTString().slice(0,16))
  }, [data]);

  return (
    <>
    <Navbar/>

    <div className="main_page_hero_section">
      <div className="backdrop_image">
        <Img src={tmdbConfig?.backDrop + selectedMovie?.backdrop_path} />
      </div>

      {!loading && <div className="opacityLayerBackground">
     {selectedMovie?.original_title} <span>{releaseDate}</span>
      </div>}

      <div className="welcome_hero_section">
        <h1 className="text_type01_hero_section">Welcome</h1>
        <span className="text_type02_hero_section">
        Discover the magic of cinema - Explore, Learn, and Immerse with our extensive movie database.
        </span>
        <section className="searching_section">
        <input type="text" placeholder="Search for a movie or a tv show"/>
        <button>Search</button>
        </section>
      </div>
    </div>

    <div className="trending_section_mainPage" id="trending">
        <h1 className="section_header_type01_main">Trending</h1>
        <section>
        <Card/>
        <Card/>
        <Card/>
        </section>
    </div>
    </>
  );
}

export default Main;
