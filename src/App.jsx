import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import Profil from "./pages/Profil"
import Accountinfo from "./pages/Accountinfo"

import "./index.css";
import Soundhub from "./pages/Soundhub"

export default function App() {
  return (
    
      <Router >
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/Profil"element={<Profil/>}/> 
            <Route path="/Accountinfo"element={<Accountinfo/>}/> 
            <Route path="/Soundhub"element={<Soundhub/>}/> 

          </Routes> 
      </Router>
    
  );
}
