import axios from '@/axios'
/**
 * 
 * @returns 用水量数据接口
 */
const {water,elect,tanpaifang} = window.CONFIG.URLS 

export function getWaterData(){
    return  axios.get(water)
}
export function getElectData(){
    return  axios.get(elect)
}
export function getTanPaiFangData(params){
    return  axios.post(tanpaifang,params)
}

