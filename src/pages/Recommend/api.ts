
import { Http } from 'src/Utils/Http';
import { ToastAndroid } from 'react-native';
import {  } from './Recommend';
import { number } from 'prop-types';
import { ISwiperData, IRecommendSongMenu, IBanner } from './interface';


/**
 * 获取推荐页面swiper轮播的数据
 */
function getSwiperData():Promise<Array<IBanner>>{
   return new Promise((resolve,reject)=>{
    Http.get<ISwiperData>("http://120.79.162.149:3000/banner").then(res=>{
        if(res.code===200){
            resolve(res.banners)
        }else{
            reject([])
            ToastAndroid.show("获取数据失败",ToastAndroid.SHORT)
        }
    }).catch(()=>{
        ToastAndroid.show("网络开小差了",ToastAndroid.SHORT)
    })
   })
}

/**
 * 获取推荐页面推荐歌单的列表数据
 * 
 */
function getRecommendSongMenu():Promise<Array<IRecommendSongMenu>>{
    return new Promise((resolve,reject)=>{
        Http.get<{code:number,result:Array<IRecommendSongMenu>}>("http://120.79.162.149:3000/personalized").then(res=>{
			if(res.code===200){
				resolve(res.result)
			}else{
                reject([])
                ToastAndroid.show("数据获取失败",ToastAndroid.SHORT)
            }
		})
    })
   
}

export {
    getSwiperData,
    getRecommendSongMenu
}