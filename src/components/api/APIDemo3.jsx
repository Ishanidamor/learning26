import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom";


export const APIDemo3 = () => {

    const [movies, setMovies] = useState([])
    const [searchParam, setSearchParam] = useState("Avengers")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const searchMovie = async()=>{

        try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=9d0394df&s=${searchParam}`
      );

        console.log(res.data); 
        setMovies(res.data.Search);
        console.log("Movies state updated");

      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
        setError("No movies found!");
      }

    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>OMDB API</h1>

         {/* Input Field */}
      <input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        placeholder="Search movie..."
      />

        <button onClick={()=>{searchMovie()}}>SEARCH</button>

        {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table className="table">
        <thead>
          <tr>
            <th>IMDB ID</th>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>DESCRIPTION</th>
            <th>POSTER</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.imdbID}</td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td> 
                <Link to={`/description/${movie.imdbID}`}>
                <button>Description</button>
                </Link>
              </td>
              <td>
                <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
                style={{ height: "150px", width: "150px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
  )
}
