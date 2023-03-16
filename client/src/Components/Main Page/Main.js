import React, { useEffect, useState } from "react";
import "./Main.css";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../Utils/Lazy load images/Img";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousels/Carousel";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../Video Popup/VideoPlayer";
import Footer from "../Footer/Footer";

function Main() {
  const navigate = useNavigate()
  const tmdbConfig = new useSelector((state) => state.tmdbConfig); // getting tmdb config from the redux
 
  const [selectedMovie, setSelectedMovie] = useState(""); // background image url
  const [releaseDate, setReleaseDate] = useState("")
  const [queryInput, setQueryInput] = useState("");

  const Upcoming = useFetch("/movie/upcoming");     // data + loading  + error as objects
  const Trending = useFetch("/trending/movie/day");
  const Popular = useFetch("/movie/popular");
  const Top_Rated = useFetch("/movie/top_rated");

  // selecting a random movie from the upcomming movies
  useEffect(() => {
    const bg = Upcoming?.data?.results[Math.floor(Math.random() * 20)]; // any random image for the background from upcoming movies
    setSelectedMovie(bg);
    let a = new Date(bg?.release_date)
    setReleaseDate(a?.toGMTString().slice(0,16))
  }, [Upcoming?.data]);


  const handleKeyDown = (e) =>{
    if(e?.key === "Enter"){
      handleSearch()
    }
  }

  const handleSearch = () =>{
    navigate(`/search/${queryInput}`)
  }


  return (
    <>
    <Navbar/>

    <div className="main_page_hero_section">
      <div className="backdrop_image">
        <Img src={tmdbConfig?.backDrop + selectedMovie?.backdrop_path} />
      </div>

      {!Upcoming?.loading && <div className="opacityLayerBackground">
     {selectedMovie?.original_title} <span onClick={()=>{navigate(`/find/movie/${selectedMovie?.id}`)}}>{releaseDate}</span>
      </div>}

      <div className="welcome_hero_section">
        <h1 className="text_type01_hero_section">Welcome</h1>
        <span className="text_type02_hero_section">
        Discover the magic of cinema - Explore, Learn, and Immerse with our extensive movie Upcoming?.database.
        </span>
        <section className="searching_section">
        <input type="text" placeholder="Search for a movie or a tv show" onChange={(e)=>{setQueryInput(e.target.value)}} onKeyDown={handleKeyDown}/>
        <button onClick={handleSearch}>Search</button>
        </section>
      </div>
    </div>

    <div className="main_page_carousel_section">
        <Carousel sectionName = "Trending" dataToMap={Trending?.data?.results}/>
        <Carousel sectionName = "What's Popular" dataToMap={Popular?.data?.results}/>
        <Carousel sectionName = "Top Rated" dataToMap={Top_Rated?.data?.results}/>
    </div>

    <Footer/>
    </>
  );
}

export default Main;
