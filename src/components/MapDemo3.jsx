import React from 'react'

export const MapDemo3 = () => {

    var students=[
        {id:1,name:"Ishani",city:"ahmedabad",gender:"Female"},
        {id:2,name:"Prakruti",city:"ahmedabad",gender:"Female"},
        {id:3,name:"Kashish",city:"ahmedabad",gender:"Female"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo3</h1>
        <table border="2" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=> {
                        return <tr>
                            <td>{st.id}</td>
                            <tb>{st.name}</tb>
                            <tb>{st.city}</tb>
                            <tb>{st.gender}</tb>
                        </tr>

                })
                }
                
            </tbody>

        </table>
    </div>
  )
}
