export interface IRankSectionTracks{
    
}
export interface IRankSection{
    coverImgUrl:string,// 图片url
    tracks:Array<{

    }>
}

/**
 * 排行榜每个榜单返回的接口
 */
export interface IRankList{
    coverImgUrl:string,// 榜单图片
    name:string,// 榜单名字
    description:string,// 榜单描述介绍
    tracks:Array<{
        name:string,// 榜单歌曲名字
        ar:Array<{
            name:string//榜单歌手名字　可能有多个
        }>,
        al:{
            picUrl:string　//榜单的详情页顶部背景名字
        }
    }>
}