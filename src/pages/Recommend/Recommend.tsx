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
		setTimeout(()=>{
			this.container.current && this.container.current.measure((x,y,width,height,pageX,pageY)=>{
				console.log(x,y,width,height,pageX,pageY);
			})
		},1000)
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
	renderItems=({item,index}:ListRenderItemInfo<IRecommendSongMenu>)=>{
		return(<SongMenuItem index={index} {...item}  />)
	}
	smartRefresh:RefObject<MusicRefreshControl>=React.createRef()
	onRefresh=()=>{
		getRecommendSongMenu().then(res=>{
			this.setState({
				songMenu:res
			})
			
			setTimeout(()=>{
				this.smartRefresh.current.finishRefresh()
			},300)
		})
	}
	container:RefObject<View>=React.createRef()
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.swiperBk}/>
				<View style={{alignItems:'center',height:dp(320),marginTop:dp(-270)}} ref={this.container} collapsable={false}>
					<Banner banners={this.state.banners}/>
				</View>
				<Text style={{fontSize:font(30),marginTop:dp(20),marginLeft:dp(20),fontWeight:'600'}}>推荐歌单 &gt;</Text>
				<View style={{flex:1,overflow:'hidden',marginTop:dp(20)}}>
					<FlatList 
						refreshControl={<MusicRefreshControl
						style={{flex:1}}
						onRefresh={this.onRefresh}
						ref={this.smartRefresh}/>}
						keyExtractor={(item)=>item.id+""}
						ListEmptyComponent={<View style={{alignItems:'center'}}><LoadingView style={{width:dp(100)}} source={require('src/LottieJson/loading-rainbow.json')}/></View> } 
						style={{flex:1}} numColumns={3}    
						data={this.state.songMenu} 
						renderItem={this.renderItems}/>
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
