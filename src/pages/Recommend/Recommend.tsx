import React, { RefObject } from 'react'
import {View, Text, TouchableNativeFeedback, StyleSheet, Image, FlatList, ListRenderItem, ListRenderItemInfo} from "react-native";
import {NavigationScreenProps, NavigationState, NavigationScreenProp} from 'react-navigation';
import Swiper from 'react-native-swiper';
import {Http} from 'src/Utils/Http';
import { getSwiperData, getRecommendSongMenu } from './api';
import { IBanner, IRecommendSongMenu } from './interface';
import { Banner } from './components/Banner';
import { SongMenuItem } from './components/SongMenuItem';
import LoadingView from 'src/components/Loading/LoadingView';
import {SmartRefreshControl,DefaultHeader} from 'react-native-smartrefreshlayout';
import { MusicRefreshControl } from './components/RefreshControl';
import { SongMenu } from './components/SongMenu';
import { FourButtonList } from './components/FourButton';
import { DayContext } from './components/DayContext';


type State={
	banners:Array<IBanner>,
	songMenu:Array<IRecommendSongMenu>
}
type Props={
	navigation:NavigationScreenProp<NavigationState>,
}
class Recommend extends  React.PureComponent<Props,State>{
	state:State={
		banners:[],
		songMenu:[]
	}
	componentDidMount(){
		getSwiperData().then(res=>{
			this.setState({
				banners:res
			})
		})
		getRecommendSongMenu().then(res=>{
			this.setState({
				songMenu:res
			})
		})
	}
	handlePress=()=>{
		this.props.navigation.navigate("Player")
	}
	container:RefObject<View>=React.createRef()
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.swiperBk}/>
				<View style={{alignItems:'center',height:dp(320),marginTop:dp(-270)}} ref={this.container} collapsable={false}>
					<Banner banners={this.state.banners}/>
				</View>
				{/* 四个小按钮,私人fm,每日推荐，歌单 */}
				<View style={{padding:dp(50)}}>
					<DayContext.Provider value={new Date().getDate()}>
						<FourButtonList/>
					</DayContext.Provider>
				</View>
				<Text style={{fontSize:font(30),marginTop:dp(20),marginLeft:dp(20),fontWeight:'600'}}>推荐歌单 &gt;</Text>
				<View style={{flex:1,overflow:'hidden',marginTop:dp(20)}}>
					<SongMenu songMenu={this.state.songMenu}/>
				</View>
			</View>
		)
	}// here 
}
const styles=StyleSheet.create({
	container:{
		flex:1
	},
	swiperBk:{
		height:dp(300),
		paddingTop:dp(30),
		backgroundColor:'#d44439',
		alignItems:'center'
	}
	
})

export {Recommend}
