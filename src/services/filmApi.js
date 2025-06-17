import axios from "axios";

export function getToken(){
    return axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=942793ac262d56a416455b75eba35928")
}