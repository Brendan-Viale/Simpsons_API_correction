import { useToggle } from "../../hooks/useToggle"

const Toggle = () => {
    const [toggle, handleToggle] = useToggle(true)

    return (
        <>
            <button onClick={handleToggle}>Toggler</button>
            {toggle && <p>Toggle</p>}
        </>
    )
}

export default Toggle