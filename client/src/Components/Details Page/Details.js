import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Img from "../../Utils/Lazy load images/Img";
import Navbar from "../Navbar/Navbar";
import "./Details.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import Carousel from "../Carousels/Carousel";

function Details() {
  const { mediaType, id } = useParams();
  const location = useLocation()
  const tmdbConfig = useSelector((state) => state.tmdbConfig); // getting tmdb config from the redux

  const MovieDetails = useFetch(`/${mediaType}/${id}`);
  const Credits = useFetch(`/${mediaType}/${id}/credits`);
  const Videos = useFetch(`/${mediaType}/${id}/videos`);
  const Similar = useFetch(`/${mediaType}/${id}/similar`);
  const Recommendations = useFetch(`/${mediaType}/${id}/recommendations`);

  const minToHour = (min) => {
    let m = min % 60;
    let h = Math.floor(min / 60);
    if (m !== 0) {
      return h.toString() + "h " + m.toString() + "m";
    } else {
      return h.toString() + "h ";
    }
  };

  const releaseDate = (date) => {
    let a = new Date(date);
    let b = a.toDateString().slice(4).split(" ");
    return b[0] + " " + b[1] + " , " + b[2];
  };


  useEffect(() => {
    window.scrollTo(0,0)

  }, [location])
  

  return (
    <>
      <Navbar />

      <div className="details_main_wrapper">
        {/* background image and opacity layer --------------------------------------------- */}
        <div className="backdrop_image" style={{ opacity: "0.3" }}>
          <Img src={tmdbConfig?.backDrop + MovieDetails?.data?.backdrop_path} />
        </div>
        <div className="opacityLayerBackground"></div>

        <section className="details_info_wrapper">
          <div className="left_info_wrapper_details">
            <h1 className="text_type01_details_page">
              {MovieDetails?.data?.original_title}
            </h1>
            {MovieDetails?.data?.tagline && (
              <h2 className="text_type02_details_page">
                {MovieDetails?.data?.tagline}
              </h2>
            )}
            <section className="tags_genres_details">
              <span>
                <AiFillStar color="yellow" />{" "}
                {MovieDetails?.data?.vote_average.toFixed(1)} |{" "}
                {MovieDetails?.data?.popularity.toFixed(0)}
              </span>
              <span> {minToHour(MovieDetails?.data?.runtime)}</span>
              <span>
                {" "}
                {MovieDetails?.data?.genres?.map((e, i) => {
                  return (
                    <span key={i}>
                      {e?.name +
                        (MovieDetails?.data?.genres?.length === i + 1
                          ? " "
                          : ", ")}
                    </span>
                  );
                })}
              </span>
              <span>{releaseDate(MovieDetails?.data?.release_date)}</span>
            </section>
            <section className="overview_details">
              {MovieDetails?.data?.overview}
            </section>
            <section className="details_action_buttons">
              <button>
                <BsFillPlayFill size={22} />
                &nbsp; Play Now
              </button>
              <button>Watch Trailer</button>
            </section>
          </div>

          <div className="right_info_wrapper_details">
            <Img
              src={tmdbConfig?.poster + MovieDetails?.data?.poster_path}
              className="deatils_page_poster"
            />
            <section className="production_companies_details">
              <h3 className="text_type03_details_page">Produced Under</h3>
              <section>
                {MovieDetails?.data?.production_companies
                  ?.slice(0, 4)
                  .map((e, i) => {
                    if (e?.logo_path) {
                      return (
                        <span key={i}>
                          <Img
                            src={tmdbConfig?.poster + e?.logo_path}
                            className="production_companies_logo"
                          ></Img>
                        </span>
                      );
                    }
                  })}
              </section>
            </section>
          </div>
        </section>
      </div>

      <div className="extra_details_wrapper">

        {/* Cast section ------------------------------------------------------------------------- */}
        <section>
          <h2 className="text_type04_details_page">Top Cast</h2>
          <section className="cast_details_wrapper">
            {Credits?.data?.cast?.filter((e1)=>{return e1?.profile_path})?.map((e, i) => {
              return (
                <div className="cast_block_details_page">
                  <Img
                    src={tmdbConfig?.profile + e?.profile_path}
                    className="cast_image_display"
                  ></Img>
                  <span className="text_type05_details_page">{e?.name}</span>
                  <span className="text_type06_details_page">{e?.character}</span>
                </div>
              );
            })}
          </section>
        </section>


            {/* Official Video section ------------------------------------------- */}
        <section>
        <h2 className="text_type04_details_page">Official Videos</h2>
        <section className="cast_details_wrapper">
          {Videos?.data?.results?.map((e,i)=>{
            return <div key={i} className="videos_details_block"> 
              <Img src={`https://img.youtube.com/vi/${e?.key}/mqdefault.jpg`} className="Video_thumbnail_details_page"/>
              </div>
          })}
        </section>
        </section>


        <Carousel sectionName="Similar Movies" dataToMap={Similar?.data?.results}/>



        <Carousel sectionName="Recommendations" dataToMap={Recommendations?.data?.results}/>
      </div>
    </>
  );
}

export default Details;
