import { useEffect, useRef, useState } from "react"

const Ref = () => {
    const [like, setLike] = useState(0)
    const liking = useRef(false)

    const iLikeIt = ()=>{
        liking.current = true
        setLike(like+1)
    }

    const iStopLikingIt = ()=>{
        liking.current = false
    }

    useEffect(()=>{
        setTimeout(()=>{
            if(liking.current)
                setLike(like+1)
        }, 300)
    }, [like])

    return (
        <>
            <p>Likes : {like}</p>
            <button onMouseDown={iLikeIt} onMouseUp={iStopLikingIt}>Like</button>
        </>
    )
}

export default Ref