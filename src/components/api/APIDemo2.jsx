
import axios from 'axios'
import React, { useState } from 'react'

export const APIDemo2 = () => {
      const [message, setMessage] = useState("")
  const [products, setProducts] = useState([])

  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/products")

    setMessage("Products loaded successfully")
    setProducts(response.data.products)
  }
  return (

    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 12</h1>

      <button onClick={getUsers}>GET</button>

      <h2>{message}</h2>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
