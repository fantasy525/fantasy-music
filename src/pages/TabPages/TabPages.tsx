import React from 'react'
import {View, Text, StatusBar, StyleSheet, Image,TouchableWithoutFeedback} from "react-native";
import {
	createMaterialTopTabNavigator,
	createStackNavigator,
	NavigationScreenProp,
	StackNavigatorConfig,
	StackViewTransitionConfigs,
	NavigationState
} from "react-navigation";
import {Song} from "src/pages/Song/Song";
import {Recommend} from 'src/pages/Recommend/Recommend';
import Player from '../Player/Player';
import {Provider} from "react-redux";
import {TabBarComponent} from './TabBarComponent';


const TabStack = createMaterialTopTabNavigator({
	Recommend: {
		screen: Recommend,
		navigationOptions: {
			title: '推荐'
		}
	},
	Song: {
		screen: Song,
		navigationOptions: {
			title: '排行'
		}
	}
},{
	tabBarComponent:(props)=><View style={{alignItems:'center',backgroundColor:'#ffffff'}}><TabBarComponent {...props}/></View>,
		tabBarOptions:{
		activeTintColor:'#f8f704',
			style:{
				height:dp(90),
				width:'100%',
				backgroundColor:'#d44439',
				shadowColor:'red',
				elevation:0

			},
			labelStyle:{
				fontSize:font(32)
			},
			tabStyle:{
				opacity:1

			},
			indicatorStyle:{
				height:dp(10)
			}
		}
})

type Props={
	navigation:NavigationScreenProp<NavigationState>
}
class TabPages extends React.PureComponent<Props>{
	static router = TabStack.router;
	render(){
		return (
			<View style={{flex:1}}>
				<StatusBar translucent={false} backgroundColor={"#d44439"}/>
				<View style={{
					backgroundColor:'#d44439',
					height:dp(80),
					flexDirection:'row',
					alignItems:'center',
					justifyContent:'space-between',
					paddingLeft:dp(20),
					paddingRight:dp(20)
				}}>
					<TouchableWithoutFeedback onPress={noop}>
						<Image source={require('./img/menu.png')} style={{width:dp(50),height:dp(50)}}/>
					</TouchableWithoutFeedback>
					<Text style={{fontSize:font(40),color:'#ffffff'}}>Fantasic Music</Text>
					<TouchableWithoutFeedback onPress={noop}>
						<Image source={require('./img/search.png')} style={{width:dp(50),height:dp(50)}}/>
					</TouchableWithoutFeedback>
				</View>
				<TabStack navigation={this.props.navigation}/>
			</View>
		)
	}
}

export {TabPages}

