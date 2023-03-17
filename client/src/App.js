import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main Page/Main";
import Page from "./Components/Search Page/Page";
import {useDispatch,useSelector} from "react-redux"
import { bindActionCreators } from "redux";
import {actionCreators} from "./state/index.js"
import { useEffect } from "react";
import { fetchDataFromApi } from "./Utils/api";
import Details from "./Components/Details Page/Details";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Components/Loader/Loader";


function App() {
  const loaderConfig = new useSelector(state=>state.loaderConfig)

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
  
  console.log(loaderConfig)

  return (
    <>
    {loaderConfig?.openModal && <Loader/>}
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
          <Route path="/search/:query" element={<Page />} />
          <Route path="/find/:mediaType/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
