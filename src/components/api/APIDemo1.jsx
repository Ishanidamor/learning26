
import axios from 'axios'
import React, { useState } from 'react'

export const APIDemo1 = () => {

  const [message, setMessage] = useState("")
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get("https://node5.onrender.com/user/user/")
    setMessage(response.data.message)
    setUsers(response.data.data)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 1</h1>

      <button onClick={getUsers}>GET</button>

      <h2>MESSAGE = {message}</h2>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((user, index) => (
              <tr key={user._id || index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

