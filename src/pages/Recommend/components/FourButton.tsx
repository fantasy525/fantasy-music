/**
 * banner下面的四个button入口
 */

import React from 'react'
import {View, Text} from 'react-native'
import { FourButtonItem } from './FourButtonItem';
import { StyleSheet } from 'react-native';

const size=120
 type Props={
    
 }
const FourButtonList:React.FC<Props>=(props)=>{
    return (
        <View style={style.container}>
            <FourButtonItem 
                key={0}
                imgHeight={dp(size)}
                imgWidth={dp(size)}
                source={require('./img/t_dragonball_icn_fm.png')}/>
            <FourButtonItem 
                key={1}
                imgHeight={dp(size)}
                imgWidth={dp(size)}
                source={require('./img/t_dragonball_icn_daily.png')}>
                 <Text style={{fontSize:font(26),color:'#ffffff',marginTop:dp(15)}}>{new Date().getDate()}</Text>
            </FourButtonItem>
                <FourButtonItem 
                key={2}
                imgHeight={dp(size)}
                imgWidth={dp(size)}
                source={require('./img/t_dragonball_icn_playlist.png')}/>
                <FourButtonItem 
                key={3}
                imgHeight={dp(size)}
                imgWidth={dp(size)}
                source={require('./img/t_dragonball_icn_rank.png')}/>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
export {FourButtonList}