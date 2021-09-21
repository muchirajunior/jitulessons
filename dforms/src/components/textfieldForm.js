import {useState} from 'react'

function TextFieldForm({addInput}){
  const [name, setName] = useState("")
  const [placeholder, setPlaceholder] = useState("")

   function submit(){
     addInput("textfield",name,placeholder)
     setName("")
     setPlaceholder("")
   }

    return(

      <div className="mb-3">
      <label className="form-label">Add text field</label>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control " id="textname" placeholder="field name" required /> <br/>
      <input value={placeholder} onChange={(e)=>setPlaceholder(e.target.value)} type="text" className="form-control"  id="textplaceholde" placeholder="field placeholder" /> <br/>
      <div className="col-12">
        <button type="submit" onClick={()=>submit()} className="btn btn-primary">Create</button>
      </div>
    </div>
    );
}

export default TextFieldForm