
import { Http, BASE_URL } from 'src/Utils/Http';
import { ToastAndroid } from 'react-native';
import {  } from './Recommend';
import { number } from 'prop-types';
import { ISwiperData, IRecommendSongMenu, IBanner } from './interface';
import axios from 'axios'

/**
 * 网易云音乐，仅供学习交流，非商业用途
 */


/**
 * 获取推荐页面swiper轮播的数据
 * {
  "method": "POST",
  "url": "https://music.163.com/api/v2/banner/get",
  "headers": {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded",
    "Referer": "https://music.163.com"
  },
  "body": "clientType=pc"
}
 */
function getSwiperData():Promise<Array<IBanner>>{
    //     axios.get('http://192.168.1.101:3000/banner').then(res=>{
    //     console.log(res.data)
    // })
   return new Promise((resolve,reject)=>{
    Http.post<ISwiperData>(`${BASE_URL.netease}/api/v2/banner/get`,{
        clientType:'pc'
    }).then(res=>{
        if(res&&res.code===200){
            resolve(res.banners)
        }else{
            reject([])
            ToastAndroid.show("获取数据失败",ToastAndroid.SHORT)
        }
    })
   })
}

/**
 * 获取推荐页面推荐歌单的列表数据
 * {
  "method": "POST",
  "url": "https://music.163.com/api/personalized/playlist",
  "headers": {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:46.0) Gecko/20100101 Firefox/46.0",
    "Content-Type": "application/x-www-form-urlencoded",
    "Referer": "https://music.163.com",
    "Cookie": ""
  },
  "body": "limit=30&offset=0&total=true&n=1000"
}
 * 
 */
function getRecommendSongMenu():Promise<Array<IRecommendSongMenu>>{
    // axios.get('http://192.168.1.101:3000/personalized').then(res=>{
    //     console.log(res.data)
    // })
    return new Promise((resolve,reject)=>{
        Http.post<{code:number,result:Array<IRecommendSongMenu>}>(`${BASE_URL.netease}/api/personalized/playlist`,{
            limit: 30,
            offset:  0,
            total: true,
            n: 1000
        })
        .then(res=>{
			if(res&&res.code===200){
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