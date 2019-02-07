import Axios,{AxiosPromise, AxiosResponse} from 'axios'
import QueryString from 'querystring'
import { ToastAndroid } from 'react-native';

const axios=Axios.create();
axios.interceptors.response.use((response)=>{
	return response
},error=>{
	ToastAndroid.show(`${error}`,ToastAndroid.SHORT)
	return Promise.reject(error)
})
class Http{
	static get<T=any>(url:string,params?:object){
		return axios.get(`${url}?${QueryString.stringify(params)}`).then<T>(response=>{
			return response.data
		})
	}
	static post(url:string,data?:object){
		return axios.post(url,QueryString.stringify(data))
	}
}
export {Http}