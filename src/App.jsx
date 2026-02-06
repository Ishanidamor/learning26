import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { HeaderComponent} from "./Components/HeaderComponent";
import { FooterComponent} from "./components/FooterComponent";
import { MapDemo1 } from './components/MapDemo1';
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { MapDemo4 } from "./components/MapDemo4"
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { NetflixSeries } from "./components/NetflixSeries";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { ErrorNotFound } from './components/ErrorNotFound';
import { Watch } from './components/Watch';
import { Teams } from './components/Teams';
import {TeamDetails} from "./components/TeamDetails"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/netflixSeries" element={<NetflixSeries />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element={<Watch/>}></Route>
        <Route path="/*" element={<ErrorNotFound/>}></Route>
        <Route path="/teams/" element={<Teams/>}></Route>
        <Route path="/teamdetails/:name" element={<TeamDetails/>}></Route>
      </Routes>
      <MapDemo4/>
    </div>
  );
}

export default App;
