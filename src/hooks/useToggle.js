import { useState } from "react"

export const useToggle = (initialValue)=>{
    const [toggle, setToggle] = useState(initialValue)

    const handleToggle = ()=>{
        setToggle(!toggle)
    }

    return [toggle, handleToggle]
}