import { useState } from "react";


function RadioForm({addInput}) {
   
  var [options,setOptions]=useState([])
  var [input, setInput] = useState("")
  var [name,setName]=useState("")

  function addoption() {
      if (input !==""){
          options.push(input); 
          setOptions(options); 
          setInput("");
      }
      console.log(options);
  }
 
  function remove(p){
      options=options.filter(n =>n !== p);
      setOptions(options)
  }

  function submit(){
          addInput("radio",name,"",options)
          setName('')
          setOptions([])    
  }
 
  return (
      <div>  
          <div className="mb-3">
          <label  className="form-label">Add radio Question  </label>
          <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Question</span>
              <input type="text" value={name} name={name} onChange={(e)=>setName(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
          </div>
         
         <div>
             { options ? options.map((opt)=>  <div> 
                    {opt}  <button   onClick={()=>remove(opt)}  type="button" class="btn-close btn-close-white"></button>
                  </div> ) : null }
         </div>
          
          <div className="input-group mb-3">
              <input type="teRecipientsernamext" className="form-control" value={input} onInput={e => setInput(e.target.value)}  placeholder="option" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" onClick={addoption}  type="button" id="button-addon2">Add Option</button>
          </div>

          <div className="col-12">
              <button type="submit" onClick={()=>submit()}  className="btn btn-primary">Create</button>
          </div>
          </div>
      </div>
  );
  
 }
 
 export default RadioForm