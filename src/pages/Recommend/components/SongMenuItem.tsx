
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
            <Text style={{width:dp(220),fontSize:font(30)}}>{props.name}</Text>
            <Text style={{
                position:'absolute',
                right:dp(30),
                fontSize:font(30),
                top:dp(2),color:'#ffffff'}}>{parseInt((props.playCount/10000)+"")}万</Text>
        </View>
    )
})

export {SongMenuItem}