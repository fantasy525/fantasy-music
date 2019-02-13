
import React from 'react';
import { View ,Text,Image} from 'react-native';

import { ListRenderItemInfo } from 'react-native';
import { IRecommendSongMenu } from '../interface';



type Props={
    index:number

}
const SongMenuItem:React.FC<Props&IRecommendSongMenu>=React.memo((props)=>{
    return(
        <View key={props.index} style={{flex:1,alignItems:'center',paddingBottom:dp(20)}}>
            <Image source={{uri:props.picUrl}} style={{width:dp(220),height:dp(220)}}/>
            <Text style={{width:dp(220),fontSize:font(30)}} ellipsizeMode={"tail"} numberOfLines={2}>{props.name}</Text>
            <View style={{ backgroundColor:'rgba(0,0,0,0.1)',position:'absolute',width:'85%',height:dp(40),alignItems:'center'
               }}>
                <View  style={{
                    position:'absolute',
                    right:dp(10),
                    fontSize:font(30),
                    flexDirection:'row',
                
                    alignItems:'center',
                    color:'#ffffff'}}>
                    <Image source={require('./img/earphone.png')} style={{width:dp(25),height:dp(25), marginRight:dp(10)}}/>
                    <Text style={{
                        fontSize:font(26),color:'#f1f1f1'}}>{parseInt((props.playCount/10000)+"")}万</Text>
                </View>
            </View>
        </View>
    )
})

export {SongMenuItem}