import TextInput from './textinput'
import Select from './select'
import Radio from './radio'
import CheckBox  from "./checkbox";
import TextField from "./textfield"

function Component({field:{type,name,placeholder,options}}){
    console.log(type);
    switch(type){
        case "textinput": return <TextInput
            name={name}
            placeholder={placeholder}
         />

        case "textfield": return <TextField
            name={name}
            placeholder={placeholder}
        />

        case "radio": return <Radio 
                        name={name}
                        options={options}
                        />

        case "checkbox": return <CheckBox 
                            name={name}
                            options={options}
                            />

        case "select": return < Select 
                        name={name}
                        placeholder={placeholder}
                        options={options}                
                        />

        default :  console.log("field not found");
        return null
    }
}

export default Component