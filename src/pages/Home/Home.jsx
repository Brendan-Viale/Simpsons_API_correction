import { useEffect, useState } from "react"
import { getAnimes } from "../../services/animeApi"
import Card from "../../components/Card/Card"
import { Link } from "react-router"

const Home = () => {
    const [animes, setAnimes] = useState([])
    const [error, setError] = useState(false)
    
    useEffect(()=>{
        getAnimes().then((animesRes)=>{
            setAnimes(animesRes.data.data)
        }).catch((error)=>{
            setError(true)
        })
    }, [])

    return (
        <div>
            {error ?
                <p>Il y a une erreur...</p>    
            :
                animes.length > 0 ?
                    animes.map((anime)=>(
                        <Link to={`/animes/${anime.mal_id}`} key={anime.mal_id}>
                            <Card title={anime.title} img={anime.images.webp.image_url}  />
                        </Link>
                    ))
                : 
                    <p>Loading...</p>
            }
        </div>
    )
}

export default Home