import { Http, BASE_URL } from 'src/Utils/Http';
import { IRankList } from './interface';
import { ToastAndroid } from 'react-native';

export const enum TopListIdEnum  {
    云音乐新歌榜= "3779629", //云音乐新歌榜
    云音乐热歌榜= "3778678", //云音乐热歌榜
    云音乐原创榜= "2884035", ///云音乐原创榜
    云音乐飙升榜= "19723756", //云音乐飙升榜
    云音乐电音榜= "10520166", //云音乐电音榜
    UK排行榜周榜= "180106", //UK排行榜周榜
    美国Billboard周榜= "60198", //美国Billboard周榜
    KTV嗨榜= "21845217", //KTV嗨榜
    iTunes榜= "11641012", //iTunes榜
    HitFMTop榜= "120001", //Hit FM Top榜
    日本Oricon周榜= "60131", //日本Oricon周榜
    韩国Melon排行榜周榜= "3733003", //韩国Melon排行榜周榜
    韩国Mnet排行榜周榜= "60255", //韩国Mnet排行榜周榜
    韩国Melon原声周榜= "46772709", //韩国Melon原声周榜
    中国TOP排行榜="112504", //中国TOP排行榜(港台榜)
    中国TOP排行榜内地= "64016", //中国TOP排行榜(内地榜)
    香港电台中文歌曲龙虎榜= "10169002", //香港电台中文歌曲龙虎榜
    华语金曲榜= "4395559", //华语金曲榜
    中国嘻哈榜= "1899724", //中国嘻哈榜
    云音乐ACG音乐榜= "71385702", //云音乐ACG音乐榜
    云音乐嘻哈榜= "991319590" //云音乐嘻哈榜
}

function getRankList(id:string):Promise<IRankList>{
    return new Promise((resolve,reject)=>{
        Http.post<{code:number,playlist:IRankList}>(`${BASE_URL.netease}/api/v3/playlist/detail`,{
            id:id,
            n:100
        }).then(res=>{
            if(res&&res.code===200){
               
                resolve(res.playlist)
            }else{
                ToastAndroid.show("数据获取失败",ToastAndroid.SHORT)
            }
        })
    })
}

export {
    getRankList
}