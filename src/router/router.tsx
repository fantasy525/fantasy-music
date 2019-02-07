import {createAppContainer, createStackNavigator, StackViewTransitionConfigs} from "react-navigation";
import {TabPages} from "src/pages/TabPages/TabPages";
import Player from "src/pages/Player/Player";
import { Recommend } from 'src/pages/Recommend/Recommend';

const MainStack = createStackNavigator({
	TabPages: {
		screen: TabPages
	},
	Recommend:{
		screen:Recommend
	}
}, {
	initialRouteName:"TabPages",
	defaultNavigationOptions:{
		header:null,
	},
	transitionConfig:()=>StackViewTransitionConfigs.SlideFromRightIOS
})

const AppContainer=createAppContainer(MainStack)
export {AppContainer}