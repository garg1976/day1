import React from 'react'
import { useContext } from 'react';

// import { FirstContext } from '../../Context/FirstContext';
// const Child3 = ({getData}) => {
    // const  {firstName, LastName, otherData, combineData}
  //  const data = useContext(useContext)
    //  //accessing data from the context
//     const styles = {
//         border: "1px solid black",
//         margin: "50px 50px 50px 50px",
//         padding: "50px 50px 50px 50px",
//       };
//       console.log(data, "data")
//   return (
//     <div style={styles}>I am Child3
//         <button onClick={getData}>Get Data from Parent</button>
//     </div>
//   )
// }

const styles = {
  border: "1px solid black",
  margin: "50px 50px 50px 50px",
  padding: "50px 50px 50px 50px",
};
const Child3 = ({ data }) => {
  return (
    <button onClick={() => data.combineData("Karan", "Garg")}>
      Send data to parent
    </button>
  );
};

export default Child3