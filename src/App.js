import React, { useState } from "react";
// import Page1 from "./commponents/Pages/Page1/"
import Child1 from "./Component/Child1";
// import { FirstContext } from "./Context/FirstContext";
import { FirstContext } from "./context/FirstContext";
const App = () => {
  // This will be the main component of the application.
  const[firstName, setfirstName]= useState("")
  const[LastName, setLastName] =  useState("")
  const[otherData, setOtherData]= useState("")
// Ye React Hook (useState) hai jo state variable create karta hai. State ka matlab wo values jo component ke re-render hone par bhi maintain rahti hain.
// use context data lene ke liye
// useState("") ka default value "" (empty string) hai.
// Jab component first time load hoga, ye teeno variables empty string ("") rahenge.
// Agar setfirstName() call hoga to firstName update ho jayega.
// Jab bhi state update hoti hai, component re-render hota hai.
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
    <FirstContext.Provider value={{firstName,LastName,otherData, combineData}}>
    {/* .provider apki puri application ko data provide krwata hai */}
       <div style={styles}> 
      App
      <Child1 getData={getData}/>
    </div>
    </FirstContext.Provider>
   
  );
};
export default App;