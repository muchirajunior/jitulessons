function Radio({ name , options}) {
    return (
        <div >  
        <div className="mb-3 ">
        <label  className="form-label">{name}  </label> <br/>
         
    
         
         { options.map((item)=>
         <div className="input-group mb-3 ">
                <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    {item}
                </label>
                <br/>
            </div>
            </div>
         )  }
            
            </div>
            </div>
        )

}

export default Radio