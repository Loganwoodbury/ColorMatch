import axios from "axios";

const http = axios.create({
    baseURL: 'https://www.thecolorapi.com'
})

export default {
    colorLookupByRGB(r,g,b){
        return http.get(`/id?rgb=rgb(${r},${g},${b})`)
    },

    colorLoookupByHex(hexcode){
        return http.get(`/id?hex=${hexcode}`)
    },

    getTriadScheme(hexcode){
        return http.get(`scheme?hex=${hexcode}&mode=triad&count=3`)
    },

    getMonochromScheme(hexcode){
        return http.get(`scheme?hex=${hexcode}&mode=monochrome&count=3`)
    },

    getAnalogicScheme(hexcode){
        return http.get(`scheme?hex=${hexcode}&mode=analogic&count=3`)
    },

    getComplimentScheme(hexcode){
        return http.get(`scheme?hex=${hexcode}&mode=complement`)
    }
}