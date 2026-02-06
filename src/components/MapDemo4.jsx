import React from 'react'

export const MapDemo4 = () => {
    var cities=[
        {id:1,city:"ahmedabad"},
        {id:2,city:"ahmedabad"},
        {id:3,city:"ahmedabad"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo4</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((c)=>{
                        return <tr>
                            <td>{c.id}</td>
                            <td>{c.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
