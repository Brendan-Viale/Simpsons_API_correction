import React, { useReducer } from 'react'

function counterReducer(state, action){
    switch(action.type){
        case "decrement" :
            return { ...state, value: state.value - 1 }
        case "reset" :
            return initialState
        case "increment" :
            return { ...state, value: state.value + 1 }
        case "pow" :
            return { ...state, value: state.value ** 2 }
        case "ceil" :
            return { ...state, value: Math.ceil(state.value) }
        default:
            throw new Error("Opération impossible")
    }
}

const initialState = {value : 0}

const Reducer = () => {
    const [counter, dispatch] = useReducer(counterReducer, initialState)
    return (
        <>
            <p>{counter.value}</p>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            <button onClick={()=>dispatch({type:"pow"})}>Pow 2</button>
            <button onClick={()=>dispatch({type:"ceil"})}>Round sup</button>
        </>
    )
}

export default Reducer