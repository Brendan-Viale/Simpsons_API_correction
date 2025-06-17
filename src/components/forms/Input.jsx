import RadioInput from "./RadioInput"

const Input = ({type, values, name, setValues, placeholder, inputValues}) => {
    const update = (e)=>{
        let newValues = {...values}
        newValues[name] = e.target.value
        setValues(newValues)
    }

    return (
        type === "radio" ? 
            <RadioInput type={type} values={values} name={name} update={update} inputValues={inputValues}/>
        :
            <input type={type} value={values[name]} onChange={update} placeholder={placeholder} name={name} />
    )
}

export default Input