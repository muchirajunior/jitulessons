import '../App.css';
import { useReducer } from "react";

function reducer(state,action){
  switch (action.type) {
    case "increment":
        return {count:state.count+1}
    case "decrement":
      return {count:state.count-1}
  
    default:
     return state;
  }
}

function Counter() {

    function increment(){
      dispatch({type:"increment"});
    }
  
    function decrement(){
      dispatch({type:'decrement'})
    }
  
    var [state,dispatch]=useReducer(reducer,{count:0})
  
  
    return (
      
            <>
            <h1>COUNTER WITH USE REDUCER</h1>
         <button onClick={()=>increment()}  >Increment</button>
            <p>{state.count}</p>
         <button  onClick={()=> decrement()} >Decrement</button>
         </>
      
    );
  }
  
  export default Counter;
  