
function TextField({name,placeholder}){
    return(
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">{name}</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    )
}

export default TextField