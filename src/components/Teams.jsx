import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Team Names</h1>
        <ul>
          <li>
          <Link to={"/teamdetails/csk"}>CSK</Link>
          </li>
          <li>
            <Link to={"/teamdetails/mi"}>MI</Link>
          </li>
          <li>
            <Link to={"/teamdetails/rcb"}>RCB</Link>
          </li>
          <li>
            <Link to={"/teamdetails/dc"}>DC</Link>
          </li>
          <li>
            <Link to={"/teamdetails/pk"}>PK</Link>
          </li>
          <li>
            <Link to={"/teamdetails/kr"}>KR</Link>
          </li>
          <li>
            <Link to={"/teamdetails/sh"}>SH</Link>
          </li>
          <li>
            <Link to={"/teamdetails/gt"}>GT</Link>
          </li>
          <li>
            <Link to={"/teamdetails/lsg"}>LSG</Link>
          </li>
          <li>
            <Link to={"/teamdetails/rcb"}>RCB</Link>
          </li>
          
        </ul>
    </div>
  )
}