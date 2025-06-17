import axios from "axios"

export const getAnimes = async ()=>{
    return await axios.get("https://api.jikan.moe/v4/top/anime")
}

export const getAnime = async (id)=>{
    return await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
}