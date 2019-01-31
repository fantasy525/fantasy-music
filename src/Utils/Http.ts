import Axios from 'axios'
import QueryString from 'querystring'

class Http{
	static get(url:string,params:object){
		console.log(`${url}?${QueryString.stringify(params)}`)
		return Axios.get(`${url}?${QueryString.stringify(params)}`)
	}
	static post(url:string,data:object){
		return Axios.post(url,QueryString.stringify(data))
	}
}
export {Http}