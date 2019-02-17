/**
 * 推荐歌单组件
 */
import React, { RefObject } from 'react'
import { FlatList, View, ListRenderItemInfo } from 'react-native';
import { MusicRefreshControl } from './RefreshControl';
import { getRecommendSongMenu } from '../api';
import LoadingView from 'src/components/Loading/LoadingView';
import { IRecommendSongMenu } from '../interface';
import { SongMenuItem } from './SongMenuItem';

type Props={
    songMenu:Array<IRecommendSongMenu>
}
 class SongMenu extends React.PureComponent<Props>{
    renderListEmptyComponent=()=>{
		return (<View style={{alignItems:'center'}}><LoadingView style={{width:dp(100)}} source={require('src/LottieJson/loading-rainbow.json')}/></View>)
	}
	flatListgetItemLayout=(data,index)=>{
		return {length:dp(300),offset:dp(300)*index,index:index}
	}
	keyExtractor=(item)=>item.id+""
    smartRefresh:RefObject<MusicRefreshControl>=React.createRef()
     /**
      * 刷新时请求新的数据
      */
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
    renderItems=({item,index}:ListRenderItemInfo<IRecommendSongMenu>)=>{
		return(<SongMenuItem index={index} {...item}  />)
	}
    render(){
        return(
            <FlatList 
                removeClippedSubviews={true}
                refreshControl={<MusicRefreshControl
                style={{flex:1}}
                onRefresh={this.onRefresh}
                ref={this.smartRefresh}/>}
                keyExtractor={this.keyExtractor}
                ListEmptyComponent={this.renderListEmptyComponent } 
                style={{flex:1}} numColumns={3}    
                data={this.props.songMenu} 
                renderItem={this.renderItems}/>
        )
    }
 }

 export {SongMenu}
