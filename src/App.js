// import React from "react";
import Child1 from "./Component/Child1";
import React, { useState } from "react";
// import FirstContext from "./context/FirstContext";
// import React, { useState, useEffect } from "react";
// import Child2 from "./Component/Child2";

const App=()=>{

  const[firstName, setfirstName]= useState("")
  const[LastName, setLastName] =  useState("")
  const[otherData, setOtherData]= useState("")

  const styles = {
    border: "1px solid black",
    margin: "50px 50px 50px 50px",
    padding: "50px 50px 50px 50px",
  };
  
  const getData = (data) =>{
    console.log("data recived sucessfully", data)
  }

  const combineData= (fName, Lname)=>{
    console.log(fName,Lname)

      // ye function in varibale ko set kr dega
      setfirstName(fName)
      setLastName(Lname)
      setOtherData(fName+Lname+"He/She is from India and above 18yr of Age")
      // ye varivale set hone ke baad context main pass honge
    }
 
  return (
    <div style={styles}>
      <h1>Hello, React!</h1>
      <Child1 getData={getData}/>
    </div>
  );
}

export default App;