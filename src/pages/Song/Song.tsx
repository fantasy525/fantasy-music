import React from 'react'
import {View,Text} from 'react-native';
import Axios from "axios";
import {Http} from "src/Utils/Http";

class Song extends React.PureComponent{
	componentDidMount(){
		Http.get("http://m.kugou.com/singer/list/88",{json:true})
			.then(res=>{
				console.log(res.data)
			})
	}
	render(){
		return (
			<View>
				<Text>2222</Text>
			</View>
		)
	}
}
export {Song}