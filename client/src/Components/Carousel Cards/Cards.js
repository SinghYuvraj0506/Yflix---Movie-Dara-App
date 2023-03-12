import React from "react";
import "./Cards.css";
import Img from "../../Utils/Lazy load images/Img";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Cards(props) {
  const navigate = useNavigate()
  const tmdbConfig = useSelector((state) => state.tmdbConfig); // getting tmdb config from the redux

  const releaseDate = (date) => {
    let a = new Date(date);
    let b = a.toDateString().slice(4).split(" ");
    return b[0] + " " + b[1] + " , " + b[2];
  };

  return (
    <div className="cards_main_container" onClick={()=>{navigate(props?.url)}}>
      <Img
        src={ props?.poster ? (tmdbConfig?.poster + props?.poster) : "https://www.fcmlindia.com/images/fifty-days-campaign/no-image.jpg"}
        className="card_backdrop_poster"
      />
      {props?.rating !== 0 && props?.mediaType !== "person" && (
        <div className="card_circular_rating">
          <CircularProgressbar
            value={parseFloat(props?.rating).toFixed(1)}
            maxValue={10}
            background
            backgroundPadding={6}
            text={`${parseFloat(props?.rating).toFixed(1)}`}
            styles={buildStyles({
              backgroundColor: "#fff",
              pathColor:
                props?.rating < 5
                  ? "red"
                  : props?.rating < 7
                  ? "orange"
                  : "green",
              textColor: "#000",
              trailColor: "transparent",
            })}
          />
        </div>
      )}
      <section className="card_text_details">
        <span className="card_title">{props?.title?.length > 23 ? props?.title?.slice(0,23) + "..." : props?.title}</span>
        {props?.mediaType === "person" ? <span>{props?.knownFor}</span> :<span className="card_date">{releaseDate(props?.release_date)}</span>}
      </section>
    </div>
  );
}

export default Cards;
