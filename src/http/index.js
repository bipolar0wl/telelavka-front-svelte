import axios from "axios";

const $host = axios.create({
    baseURL: "http://82.146.44.42/"
    //baseURL: process.env.API_URL
})

const $authHost = axios.create({
    //baseURL: process.env.API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}