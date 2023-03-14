import {$authHost, $host} from "./index";
//import jwt_decode from "jwt-decode";

export const fetchCategories = async () => {
    const {data} = await $host.get('api/v1/categories')
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.post('api/v1/products/')
    return data
}
export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/v1/products/' + id)
    return data
}

export const fetchOneImage = async (id, ext) => {
    const {data} = await $host.get(`api/v1/products/${id}.${ext}`)
    return data
}