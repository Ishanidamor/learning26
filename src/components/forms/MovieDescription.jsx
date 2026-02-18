import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDescription = () => {

    const { id } = useParams();   // get imdbID from URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {

    const getMovieDetails = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=9d0394df&i=${id}`
        );

        setMovie(res.data);

      } catch (error) {
        console.log(error);
      }
    };

      getMovieDetails();

  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

    return (

         <div style={{ textAlign: "center" }}>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />

      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  )
}
