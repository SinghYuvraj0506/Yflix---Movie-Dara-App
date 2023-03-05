import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main Page/Main";
import Page from "./Components/Search Page/Page";
import {useDispatch,useSelector} from "react-redux"
import { bindActionCreators } from "redux";
import {actionCreators} from "./state/index.js"
import { useEffect } from "react";
import { fetchDataFromApi } from "./Utils/api";

function App() {
  const dispatch = useDispatch()
  const {setTMDBConfiguration} = bindActionCreators(actionCreators,dispatch)

  // setting the config so that it can be used throughout the application/website
  useEffect(() => {
    fetchDataFromApi("/configuration")
    .then(res=>{
      setTMDBConfiguration({
        backDrop:res?.images?.secure_base_url + "original",
        profile:res?.images?.secure_base_url + "original",
        poster:res?.images?.secure_base_url + "original"
      })
    })
    .catch(err=>{
      console.log(err)
    })

  }, [])
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
          <Route path="/search/:mediaType/:time" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
