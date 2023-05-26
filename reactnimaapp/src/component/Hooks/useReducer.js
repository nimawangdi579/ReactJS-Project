import React from 'react'
import './style.css'
const reducer = (state, action) => {
    if(action.type === "INCR"){
       state = state + 1;
    }
    if( state>0 && action.type === "DECR"){
        state = state - 1;
     }
     return state;
};

const UseReducer = () => {
    // const initialData =0;
//   const [myNum, setMyNum] = React.useState(initialData);

  const initialData = 10;
  const [state, dispatch] = React.useReducer(reducer, initialData);
  return (
    <>
    <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({type:"INCR"})} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         Incr
        </div>
<div Class="button2" onClick={() => dispatch({type:"DECR"})}>
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

export default UseReducer
