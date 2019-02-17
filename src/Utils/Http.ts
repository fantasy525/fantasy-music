import Axios,{AxiosPromise, AxiosResponse, AxiosRequestConfig} from 'axios'
import QueryString from 'querystring'
import { ToastAndroid } from 'react-native';

export const BASE_URL={
	netease:"https://music.163.com"
}
// 网易云音乐的header
const NETEASE_CLOUD_HEADER_CONFIG={
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:46.0) Gecko/20100101 Firefox/46.0",
    "Content-Type": "application/x-www-form-urlencoded",
    "Referer": "https://music.163.com",
    "Cookie": ""
}
// 公共api
const COMMON_CONFIG={
	headers:NETEASE_CLOUD_HEADER_CONFIG,
	transformRequest:function(data){
		return  `${QueryString.stringify(data)}`
	}
}
const axios=Axios.create();
axios.interceptors.response.use((response)=>{
	return response
},error=>{
	ToastAndroid.show(`${error}`,ToastAndroid.SHORT)
	return Promise.reject(error)
})
class Http{
	static get<T=any>(url:string,params?:object,headerConfig:typeof NETEASE_CLOUD_HEADER_CONFIG=NETEASE_CLOUD_HEADER_CONFIG){
		COMMON_CONFIG.headers={...COMMON_CONFIG.headers,...headerConfig}
		params?url=`${url}?${QueryString.stringify(params)}`:url
		return axios.get(url,COMMON_CONFIG).then<T>(response=>{
			return response.data
		}).catch(error=>{
			ToastAndroid.show("网络开小差了",ToastAndroid.SHORT)
		})
	}
	static post<T=any>(url:string,data?:object,headerConfig:typeof NETEASE_CLOUD_HEADER_CONFIG=NETEASE_CLOUD_HEADER_CONFIG){
		COMMON_CONFIG.headers={...COMMON_CONFIG.headers,...headerConfig}
		return axios.post(url,data,COMMON_CONFIG).then<T>(response=>{
			
			return response.data
		}).catch(error=>{
			ToastAndroid.show("网络开小差了",ToastAndroid.SHORT)
		})
	}
}
export {Http}