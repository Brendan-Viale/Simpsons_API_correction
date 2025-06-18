import { useContext, useEffect } from 'react'
import { AppContext } from '../../store/AppContext'

const Header = () => {
    const {store, setStore} = useContext(AppContext)

    const changeTheme = ()=>{
        setStore({
            ...store,
            theme : store.theme==="light" ? "dark" : "light"
        })
    }
    
    useEffect(()=>{
        store.theme === "dark" ?
            document.querySelector("body").classList.add("dark")
        : 
            document.querySelector("body").classList.remove("dark")
    }, [store])

    return(
        <header>
            <p>Bonjour {store.username}</p>
            <button onClick={changeTheme}>
                {store.theme === "light" ? "🌙" : "☀️"}
            </button>
        </header>
    )
}

export default Header