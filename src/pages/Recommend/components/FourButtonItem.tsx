/**
 * banner下面的四个button 的item
 */

import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import { DayContext } from './DayContext';
import { StyleSheet } from 'react-native';
import { Omit } from 'react-redux';


 type Props={
       days:number,
       source:number,
       imgWidth:number,
       imgHeight:number
 }

 const Item:React.FC<Props>=(props)=>{
     return (
         <View style={styles.container}>
            <ImageBackground source={props.source} style={{width:props.imgWidth,height:props.imgHeight,  alignItems:'center',
        justifyContent:'center'}}>
               {props.children?props.children:null}
            </ImageBackground>
            
         </View>
     )
 }
const styles=StyleSheet.create({
    container:{
        width:dp(120),
        height:dp(120),
        borderRadius:dp(120),
        backgroundColor:'#d43c33',
      
    }
})

const FourButtonItem:React.FC<Omit<Props,"days">>=(props)=>{
    return (
        <DayContext.Consumer>
            {
                (value)=>{
                    return (<Item days={value} {...props}/>  )
                }
            }
        </DayContext.Consumer>
    )
}
export {FourButtonItem}
