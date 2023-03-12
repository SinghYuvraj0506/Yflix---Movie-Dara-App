import React from "react";
import Cards from "../Carousel Cards/Cards";
import "./Carousel.css";

function Carousel(props) {
  return (
    <div className="carousel_outside_container">
      <h1 className="carousel_text01">{props?.sectionName}</h1>
      <div className="carousel_scroll_wrapper">
        {props?.dataToMap?.map((e, i) => {
          return (
            <Cards
              key={i}
              title={e?.title || e?.name}
              mediaType={e?.media_type}
              release_date={e?.release_date || e?.first_air_date}
              poster={e?.poster_path}
              rating={e?.vote_average}
              url={`/find/${e?.media_type || "movie"}/${e?.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
