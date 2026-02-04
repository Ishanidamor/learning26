import React from 'react'

export const MapDemo2 = () => {
    var user=[
        {id:1,name:"ishani",age:23,gender:"female"},
        {id:2,name:"Prakruti",age:20,gender:"female"},
        {id:3,name:"kASHISH",age:23,gender:"female"}
    ]
  return (
    <div>
        <h1>MapDemo2</h1>
        {
            user.map((users)=>{
                return<li>{users.id} {users.name} {users.age} {users.gender}</li>
            })
        }
        </div>
  )
}
