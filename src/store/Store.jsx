import { useState } from "react"
import { AppContext } from "./AppContext"

const Store = ({children}) => {
    const [store, setStore] = useState({
        theme:"light",
        username:""
    })

    return(
        <AppContext.Provider value={{store, setStore}}>
            {children}
        </AppContext.Provider>
    )
}

export default Store