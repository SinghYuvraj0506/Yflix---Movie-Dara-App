import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import useFetch from "../../hooks/useFetch";
import Cards from "../Carousel Cards/Cards";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Page.css";

function Page() {
  const cookies = new Cookies();
  const navigate = useNavigate()
  const { query } = useParams();
  
  const { data, loading } = useFetch(`/search/multi?query=${decodeURIComponent(query)}`);

  if(!cookies.get("auth-token")){
    navigate("/login")
    return null
  }

  return (
    <>
      <Navbar />

      <div className="search_page_wrapper">
        <h1 className="text_type01_search_page">
          Search results for "{decodeURIComponent(query)}"
        </h1>

        <h2 className="text_type02_search_page">Movies / TV Shows</h2>
        <section>
          {data?.results
            ?.filter((e1) => {
              return e1?.media_type !== "person";
            })
            .map((e, i) => {
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
        </section>

        {data?.results
            ?.filter((e1) => {
              return e1?.media_type === "person";
            })?.length !==0 && <h2 className="text_type02_search_page">People</h2>}
        <section>
          {data?.results
            ?.filter((e1) => {
              return e1?.media_type === "person";
            })
            .map((e, i) => {
              return (
                <Cards
                  key={i}
                  title={e?.name}
                  mediaType={e?.media_type}
                  poster={e?.profile_path}
                  knownFor={e?.known_for_department}
                  url={`/find/${e?.media_type}/${e?.id}`}
                />
              );
            })}
        </section>
      </div>

      <Footer/>
    </>
  );
}

export default Page;
