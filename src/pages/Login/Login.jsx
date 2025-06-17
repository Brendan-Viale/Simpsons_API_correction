import { useState } from "react"
import Input from "../../components/forms/Input"
import { loginInputs } from "../../utils/loginForm"
import { verifyCredentials } from "../../utils/loginCredentials"
import { useNavigate } from "react-router"
import { getToken } from "../../services/filmApi"

const Login = () => {
    const [values, setValues] = useState({
        username:"",
        password:""
    })

    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const loginSubmit = async (e)=>{
        e.preventDefault()
        if(verifyCredentials(values)){
            const token = await getToken()
            localStorage.setItem("token", token.data.request_token)
            navigate("/")
        }
        else{
            setError("Identifiants invalides")
        }
    }

    return (
        <>
            <form onSubmit={loginSubmit}>
                {
                    loginInputs.map((input) => (
                        <Input key={input.name} {...input} values={values} setValues={setValues} />
                    ))
                }            
                <button>Se connecter</button>
            </form>
            {error && <p>{error}</p>}
        </>

    )
}

export default Login