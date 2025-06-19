import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getAnime } from "../../services/animeApi"
import { Title } from "../../components/styled-components/Title"

const Anime = () => {
    const [anime, setAnime] = useState(null)
    const [error, setError] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        getAnime(id).then((animeRes)=>{
            setAnime(animeRes.data.data)
        }).catch((error)=>{
            setError(true)
        })
    }, [])
    
    
    return (
        <div>
            {error ?
                <p>Aucun anime n'a été trouvé...</p>
                : anime ?
                    <>
                        <Title color="green">{anime?.title}</Title>
                        <img src={anime?.images.webp.image_url} />
                        <p>Rank : {anime?.rank}</p>
                    </>
                : <p>Loading...</p>
            }
        </div>
    )
}

export default Anime