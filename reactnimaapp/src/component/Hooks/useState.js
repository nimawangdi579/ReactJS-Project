import React from 'react'
import './style.css'

const useState = () => {
    const initialData =0;
  const [myNum, setMyNum] = React.useState(initialData);
  
  return (
    <>
    <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         Incr
        </div>
<div Class="button2"onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
   Decr
</div>
    </div>
      
    </>
  )
}

export default useState
