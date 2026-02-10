import React from 'react'
import {EmployeeList} from "./EmployeeList" 

export const Employees = () => {

    var title = "EMPLOYEE APP";
    
    var company={
        name: "Royaltechnosoft",
        year: 2026,
    };

    var employees =[
        {id: 101, name: "Pooja", age: 20},
        {id: 102, name: "Kashis", age: 22},
        {id: 103, name: "Parth", age: 23},
    ];

  return (

    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>

        <EmployeeList title={title} company={company} employees={employees}></EmployeeList>

    </div>
  )
}
