import axios from "axios";

const http = axios.create({
    baseURL: 'https://www.thecolorapi.com'
})

export default {
    colorLookupByRGB(r,g,b){
        return http.get(`/id?rgb=rgb(${r},${g},${b})`)
    }
}