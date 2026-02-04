import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <ul>
          <li>
          <Link to={"/watch/Strangerthings"}>Stranger things</Link>
          </li>
          <li>
            <Link to={"/Watch/sitaramen"}>Sita ramen</Link>
          </li>
          <li>
            <Link to={"/Watch/siddhat"}>Siddhat</Link>
          </li>
        </ul>
    </div>
  )
}