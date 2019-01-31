import {createAppContainer, createStackNavigator, StackViewTransitionConfigs} from "react-navigation";
import {TabPages} from "src/pages/TabPages/TabPages";
import Player from "src/pages/Player/Player";

const MainStack = createStackNavigator({
	TabPages: {
		screen: TabPages
	},
	Player:{
		screen:Player
	}
}, {
	defaultNavigationOptions:{
		header:null,
	},
	transitionConfig:()=>StackViewTransitionConfigs.SlideFromRightIOS
})

const AppContainer=createAppContainer(MainStack)
export {AppContainer}