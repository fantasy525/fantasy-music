
/**
 * 推荐页面swiper接口返回的数据格式
 */
export interface ISwiperData{
    code:number,
    banners:Array<IBanner>
}
export interface IBanner{
	backgroundUrl: string
	monitorClick: string
	monitorImpress: string
	monitorType: string
	picUrl: string
	targetId: string
	targetType: string
	url: string
}

export interface IRecommendSongMenu{
	alg: string
	canDislike: boolean
	copywriter: string
	highQuality: true
	id: number
	name: string
	picUrl:string
	playCount: number
	trackCount: number
	type: number
}