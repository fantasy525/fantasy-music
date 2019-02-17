
import React, { RefObject } from 'react'
import {View,Text, SectionList, ScrollView, StyleSheet, Image} from 'react-native'
import { MusicRefreshControl } from '../Recommend/components/RefreshControl';
import { Http, BASE_URL } from 'src/Utils/Http';
import  axios  from 'axios';
import QueryString from 'querystring'
import { getRankList, TopListIdEnum} from './api';
import { IRankList } from './interface';


type State={

    rankData1:IRankList | null// 嘻哈帮
}


class RankPage extends React.PureComponent<{},State>{
    state:State={
        rankData1:null
    }
    componentDidMount(){
      getRankList(TopListIdEnum.云音乐嘻哈榜).then(res=>{
          this.setState({
              rankData1:res
          })
      })
    }
    onRefresh=()=>{
        const url=""
        axios.post(`${BASE_URL.netease}/api/v2/banner/get`,{
            clientType:'pc'
        },)
        .then(res=>{
            console.log(res.data)
            this.smartRefresh.current.finishRefresh()
        })
  
    }
    smartRefresh:RefObject<MusicRefreshControl>=React.createRef()
    render(){
        return (
         <View style={styles.container}>
             <ScrollView style={{flex:1}} refreshControl={<MusicRefreshControl
						style={{flex:1}}
						onRefresh={this.onRefresh}
						ref={this.smartRefresh}/>}>
                <Text style={[styles.title]}>江小白说唱榜</Text>
               {this.state.rankData1&& <View style={{flexDirection:'row'}}>
                    <Image source={{uri:this.state.rankData1.coverImgUrl}} style={{width:dp(200),height:dp(200),borderRadius:dp(5)}}/>
                    <View style={{marginLeft:dp(20),justifyContent:'center'}}>
                        {
                            this.state.rankData1.tracks.slice(0,3).map((track,index)=>{
                                return <Text 

                                ellipsizeMode="tail" 
                                numberOfLines={1} 
                                key={track.name} 
                                style={{fontSize:font(28),width:dp(500),height:dp(60),textAlignVertical:'center'}}>{index+1}.{track.name}-{track.ar[0].name}</Text>
                            })
                        }
                        
                    </View>
                </View>}
             </ScrollView>
         </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:dp(10)
    },
    title:{
        fontSize:font(35),
        fontWeight:'600',
        color:'#000000',
        marginLeft:dp(10),
        height:dp(80),
        textAlignVertical:'center'
    }
})

export {RankPage}   