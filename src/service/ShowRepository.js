import { GET } from "../utils/HttpUtils"

const host =
    import.meta.env.VITE_HOST;



export const addFavorites = (showId, reshandle) => {
    let param = { showId: showId }
    GET(host, "/addFavorites", param, reshandle);
}

export const delFavorites = (showId, reshandle) => {
    let param = { showId: showId }
    GET(host, "/delFavorites?", param, reshandle);
}

export const queryShow = (reshandle) => {
    GET(host, "/query", {}, reshandle);
}

export const queryFavorites = (reshandle) => {
    GET(host, "/queryFavorites", {}, reshandle);
}