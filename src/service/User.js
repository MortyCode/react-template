import { GET } from "../utils/HttpUtils"

const host =
    import.meta.env.VITE_HOST;


export const randomRegister = (reshandle) => {
    GET(host, "/randomRegister", {}, reshandle);
}

export const register = (nickname, username, password, reshandle) => {
    GET(host, "/register", { nickname: nickname, username: username, password: password }, reshandle);
}

export const login = (username, password, reshandle) => {
    GET(host, "/login", { username: username, password: password }, reshandle);
}