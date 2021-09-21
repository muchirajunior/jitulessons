import './style.css'
import TextForm from "../components/textform"
import CheckForm from "../components/checkboxForm"
import RadioForm from "../components/radioForm"
import SelectForm from "../components/selectForm"
import TextFieldForm from '../components/textfieldForm'
import React, { useEffect, render, useState} from 'react'
import Component from '../components/component'

//
function Home() {
    var [inputFields, setInputFields]=useState([])
   
    function addInput(type,name, placeholder,options) {
        setInputFields([...inputFields, {type,name,placeholder,options}])
        
        console.log(inputFields)
    } 

    function remove(item){
        inputFields=inputFields.filter(n=>n !== item)
        setInputFields(inputFields)
        console.log(inputFields)
    }


    useEffect(()=>{
        console.log("reloading data")
        
    },[])
   
   

    return (
        <div className ="body" >
            <div className="header" >DYNAMIC FORMS</div>
            <div className="container">
                <div className="row align-items-start">
                   
                    <div className="col">
                         <div className="row border "> < TextForm addInput={addInput} /> </div>
                         <div className="row border " > < CheckForm addInput={addInput} /> </div>
                         <div className="row border "> < RadioForm addInput={addInput} /> </div>
                         <div className="row border" > < SelectForm  addInput={addInput}/> </div>
                         <div className="row border" > < TextFieldForm  addInput={addInput}/> </div>
                     </div>

                     <div className="col">
                    <div className="row g-3">
                           <div className="mb-3 ">
                              {inputFields.map((field,i) => 
                               <div className="row">
                                <div className="col"> <Component key={i} field={field}  /> </div>
                                <div className="col"> <button onClick={()=>remove(field)}  type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </div>   
                                 )}

                           </div>
                    </div>
                    <div className="mb-3">
                    <button  type="button" class="btn btn-warning">Submit</button>
                    </div>
                     </div>
                </div>
            </div>

      

        </div>
    );
}

export default Home