import  Sound  from 'react-native-sound';
import {Platform, ToastAndroid} from "react-native";
class Audio extends Sound{
	static autoPlay:boolean=true
	constructor(url:string,cb?:(error)=>void){
		Sound.setCategory('Playback',true)
		super(url,Sound.MAIN_BUNDLE,(error=>{
			if (error) {
				console.log('failed to load the sound', error);
				if(Platform.OS==='android'){
					ToastAndroid.show("加载失败请稍后",ToastAndroid.SHORT)
				}

				return;
			}
			// loaded successfully
			Audio.autoPlay&&cb&&cb(error)

		}));


	}
  onBufferingChange(cb:(progress:number)=>void){
		super.getBufferingUpdate(cb)
  }
}
export {Audio}