
function TextInput({name,placeholder}) {
    return (
        <div className="mb-3">
             <label  className="form-label">{name}  </label>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder={placeholder} aria-label={name} aria-describedby="basic-addon1" />
        </div>
        </div>
    );
    
}

export default TextInput