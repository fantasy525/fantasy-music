import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {MaterialTopTabBar   } from 'react-navigation-tabs'


const TabBarComponent = (props) => {

	return (<MaterialTopTabBar {...props} swipeDistanceThreshold={10}   getLabelText={
		({route})=>{
			return function ({focused, tintColor }) {
				console.log(tintColor)
				if(focused){
					return (<View style={tabStyle.tabActiveStyle}>
						<Text style={{color:tintColor,fontSize:font(42)}}>{props.getLabelText({route})}</Text>
					</View>)
				}else{
					return (<Text style={{fontSize:font(32),color:'#ffffff'}}>{props.getLabelText({route})}</Text>)
				}
			}
		}
	} />)
};

export {TabBarComponent}
const tabStyle=StyleSheet.create({
	tabActiveStyle:{

		alignItems:'center',
		justifyContent:'center'
	}
})