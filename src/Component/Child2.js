import React from "react";
import Child3 from "./Child3";
// import FirstContext from "../../Context/FirstContext";

const Child2 = ({ getData }) => {
  const styles = {
    border: "1px solid black",
    margin: "50px 50px 50px 50px",
    padding: "50px 50px 50px 50px",
  };

  return (
    <div style={styles}>
      I am Child2
      <Child3 getData={getData} />
    </div>
  );
};

export default Child2;
