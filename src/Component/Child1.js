import React from 'react'
import Child2 from './Child2'

const Child1 = ({getData}) => {
    const styles = {
        border: "1px solid black",
        margin: "50px 50px 50px 50px",
        padding: "50px 50px 50px 50px",
      };
  return (
    <div style={styles}>Child1
        <Child2 getData={getData}/>
    </div>
  )
}

export default Child1