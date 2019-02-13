import {PixelRatio, Dimensions, Alert, StatusBar, ToastAndroid} from "react-native";


const {width,height} = Dimensions.get('window');
const dpr=PixelRatio.get()// 设备dpr

const baseUI:number=750;// 设计稿默认的宽度
const baseUIHeight:number=1334;// 设计稿默认的高度
const baseDpr=2
const fontScale = PixelRatio.getFontScale();
global.WINDOW_WIDTH=width
global.WINDOW_HEIGHT=height

/**
 * translate psd px to dp
 * @param {number} px
 * @returns {number}
 */
global.dp=function (px:number):number {
	if(px===1){
		return 1;
	}
	return PixelRatio.roundToNearestPixel(px / baseUI * width);
}

global.getDp=function (px:number):number {
	return PixelRatio.roundToNearestPixel(px /dpr);
}
global.font=(px:number):number => {
	return PixelRatio.roundToNearestPixel(px / baseUI * width/fontScale);
};
global.noop=()=>{}
global.statusBarHeight=StatusBar.currentHeight

