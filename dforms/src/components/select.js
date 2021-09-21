
function Select({name,placeholder,options}){
    return (
        <div className="mb-3" >
            <label  className="form-label">{name} </label>
        <div className="input-group mb-3">
        <select className="form-select" aria-label="Default select example">
    <option selected>{placeholder}</option>
        {options.map((opt)=> <option value="option">{opt}</option>)}               
        </select>
     </div>
     </div>
    )
}
export default Select