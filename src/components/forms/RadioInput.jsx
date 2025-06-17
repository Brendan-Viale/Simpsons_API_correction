const RadioInput = ({type, values, name, update, inputValues}) => {
  return (
    inputValues.map((value)=>(
        <div key={value}>
            <label htmlFor={value}>{value}</label>
            <input id={value} type={type} value={value} onChange={update} name={name} checked={value===values[name]} />
        </div>
    ))
  )
}

export default RadioInput