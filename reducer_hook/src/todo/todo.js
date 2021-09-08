import  "../App.css";
import { useState, useReducer } from "react";

const actions={
    ADD_TODO:"add-todo",
    TOGGLE: "toggle"
}

 function reducer(todos,action){
    switch (action.type) {
        case actions.ADD_TODO:
            return [...todos,newTodo(action.payload)]

        case actions.TOGGLE:
            todos.map(todo=> todo === actions.payload.todo ? todo.complete=true : todo.complete=false )
            return [...todos]
           
    
        default:
            return todos
    }
}

function newTodo({name}){
    return {id:Date.now(), name:name, complete:false}
}


export default  function Todo(){

    const [name,setName]=useState('')
    const [todos,dispatch]=useReducer(reducer,[])

    function handleSubmit(){
        dispatch({type:actions.ADD_TODO, payload:{name:name}})
        console.log(todos);
        setName('')}


    function handleChange(todo){
        // dispatch({type:actions.TOGGLE, payload:{todo:todo} })
        todo.complete=true;
        console.log(todos);
    }

    return(
        <div className="App">
        <header className="App-header">
        <h1>Todo WITH USE REDUCER</h1>
         <input  type="text" value={name} onChange={(e)=>setName(e.target.value)}   />
         <br/>
         <button onClick={()=>handleSubmit()} >Submit</button>
         <br/>

         <h2>incomplete todos</h2>
         {  todos.map(todo => todo.complete ? null: <div> 
             <input type="checkbox" onChange={()=> todo.complete=true }
           value={todo.complete}   /> <label> {todo.name} </label> </div> ) }
          <br/>


        <h2>complete todos</h2>
         {  todos.map(todo => todo.complete ?  <div> 
        <label> {todo.name} </label>  <button onClick={() => todos.filter(todo => todos !== todo  )  }  >  delete </button> </div> : null ) }
        </header>
        </div>

    );
} 