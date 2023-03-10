import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";        // tmdb base url


const headers = {
  Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmNlZGQ3ZmMzOGQ5MWQ2YzVjZjY1NmI4Mjk1YjI1YSIsInN1YiI6IjY0MDRkMGQ0NjdkY2M5MDBkNDgxZjUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-hl06xYRB_wBfc0t9sKwNimjRTNRpEcPiif4qBEVYoQ"
};


export const fetchDataFromApi = async (url, params) => {        // base fetch api function.....................
  console.log(url)
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;

  } catch (error) {
    console.log(error)
    return error
  }
};



