import React from 'react'
import { useContext } from 'react';
import { FirstContext } from '../../Context/FirstContext';
const Child3 = ({getData}) => {
    // const  {firstName, LastName, otherData, combineData}
   const data = useContext(FirstContext)
    //  //accessing data from the context
    const styles = {
        border: "1px solid black",
        margin: "50px 50px 50px 50px",
        padding: "50px 50px 50px 50px",
      };
      console.log(data, "data")
  return (
    <div style={styles}>I am Child3
<button onClick={() =>data.combineData("nikita","sharma")}>send data to parent</button>
    </div>
  )
}

export default Child3