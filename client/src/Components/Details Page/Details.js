import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Img from "../../Utils/Lazy load images/Img";
import Navbar from "../Navbar/Navbar";
import "./Details.css";
import {AiFillStar} from "react-icons/ai"

function Details() {
  const { mediaType, id } = useParams();
  const tmdbConfig = useSelector((state) => state.tmdbConfig); // getting tmdb config from the redux

  const { data, loading } = useFetch(`/${mediaType}/${id}`);


  const minToHour = (min) =>{
    let m = min % 60
    let h = Math.floor(min/60)
    if(m !== 0){
        return h.toString()+"h "+ m.toString() + "m"
    }
    else{
        return h.toString()+"h "
    }
  }

  const releaseDate = (date) => {
    let a = new Date(date);
    let b = a.toDateString().slice(4).split(" ");
    return b[0] + " " + b[1] + " , " + b[2];
  };

  return (
    <>
      <Navbar />

      <div className="details_main_wrapper">
        {/* background image and opacity layer --------------------------------------------- */}
        <div className="backdrop_image">
          <Img src={tmdbConfig?.backDrop + data?.backdrop_path} />
        </div>
        <div className="opacityLayerBackground"></div>

        <section className="details_info_wrapper">
            <div className="left_info_wrapper_details">
                <h1 className="text_type01_details_page">{data?.original_title}</h1>
                <section className="tags_genres_details">
                    <span><AiFillStar color="yellow"/> {data?.vote_average.toFixed(1)} | {data?.popularity.toFixed(0)}</span>
                    <span>  {minToHour(data?.runtime)}</span>
                    <span> {data?.genres?.map((e,i)=>{return <span key={i}>{e?.name + " "}</span> })}</span>
                    <span>{releaseDate(data?.release_date)}</span>
                </section>
                    <br/>
                    <br/>
                <section className="overview_details">
                    {data?.overview}
                </section>

            </div>

            {/* <div className="right_info_wrapper_details">
            <Img src={tmdbConfig?.poster + data?.poster_path} />
            </div> */}

        </section>
      </div>
    </>
  );
}

export default Details;
