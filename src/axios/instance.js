import axios from 'axios'
console.log('baseurl',window.CONFIG.baseUrl);
const instance = axios.create({
    baseURL:window.CONFIG.baseUrl,
})

instance.interceptors.request.use(config=>{
    return config
},error=>{
    console.log(error)
})

instance.interceptors.response.use(response=>{
    const res = response.data
    if(typeof res ===Object){
         return response.data
    }else{
        return JSON.parse(response.data)
    }
},error=>{
     return Promise.resolve(error.response)
})

export default instance