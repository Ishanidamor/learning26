import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
// import { HeaderComponent} from "./Components/HeaderComponent";
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
import { FunctionDemo1 } from './components/FunctionDemo1';
import { UsestateDemo1 } from './components/UsestateDemo1';
import { UsestateDemo2 } from './components/UsestateDemo2';
import { UsestateDemo3 } from './components/UsestateDemo3';
import { Employees } from './components/Employees';
import { FormDemo1 } from './components/forms/FormDemo1';
import { FormDemo2 } from './components/forms/FormDemo2';
import { FormDemo3 } from './components/forms/FormDemo3';
import { FormDemo4 } from './components/forms/FormDemo4';
import { FormDemo5 } from './components/forms/FormDemo5';
import { FormDemo6 } from './components/forms/FormDemo6';

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
        <Route path="/functiondemo1" element={<FunctionDemo1/>}></Route>
        <Route path='/usestatedemo1' element={<UsestateDemo1/>}></Route>
        <Route path='/usestatedemo2' element={<UsestateDemo2/>}></Route>
        <Route path='/usestatedemo3' element={<UsestateDemo3/>}></Route>
        <Route path="/*" element={<ErrorNotFound/>}></Route>
        <Route path="/teams/" element={<Teams/>}></Route>
        <Route path="/teamdetails/:name" element={<TeamDetails/>}></Route>
        <Route path="/formdemo1" element={<FormDemo1/>}></Route>
        <Route path="/formdemo2" element={<FormDemo2/>}></Route>
        <Route path="/formdemo3" element={<FormDemo3/>}></Route>
        <Route path="/formdemo4" element={<FormDemo4/>}></Route>
        <Route path="/formdemo5" element={<FormDemo5/>}></Route>
        <Route path='/formdemo6' element={<FormDemo6/>}></Route>
        <Route path="/employees" element={<Employees/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
