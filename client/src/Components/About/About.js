import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./About.css"



function About() {

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
    


  return (
    <>
    <Navbar aboutPage={true}/>

    <section className="extra_section">

    </section>

    <div className="about_wrapper">
        <section>
            <div>
                <h1>About</h1>
            <p>Yflix, is a Movie data display website created using the ReactJS. The website is very stunning in terms of UI and UX and is made for users to help them in gathering informations regarding the movie and tv shows prevailing in the world.
                <br/>
                <br/>
                Also, the app uses TMDB API to get all the data and contains a basic authentication / login system setup using the Google firebase authentication.
            </p>
            </div>
            <img src={require("../../Utils/images/hero.png")} alt="" />
        </section>
        <section>
            <img src={require("../../Utils/images/details.png")} alt="" />
            <div>
                <h1>Detailed Info</h1>
            <p>Get information (Title, Release date, Ratings, Production houses,etc) of any movies or web series in detail. This details are presented very clearly under a proper design</p>
            </div>
        </section>
        <section>
            <div>
                <h1>Search your query</h1>
            <p>Search your favorite movie / tv show / people and the results present throughout the globe.</p>
            </div>
            <img src={require("../../Utils/images/search.png")} alt="" />
        </section>
        <section>
            <img src={require("../../Utils/images/trending.png")} alt="" />
            <div>
                <h1>Various carousels and genres</h1>
            <p>Select your personal favorite movie and tv shows based on various genres and the recomedations in the form of nicely desgined carousels.</p>
            </div>
        </section>
        <section>
            <div>
                <h1>Cast, Credits and Officials</h1>
            <p>Get the detailed info of the Credits , Cast and the officical videos and posters of any show at one place.</p>
            </div>
            <img src={require("../../Utils/images/cast.png")} alt="" />
        </section>
        <section>
            <img src={require("../../Utils/images/video.png")} alt="" />
            <div>
                <h1>Watch video</h1>
            <p>Watch the official videos as well as trailer on the app itself. No need to searching it on any other website.</p>
            </div>
        </section>
    </div>

    <Footer/>

    </>
  )
}

export default About