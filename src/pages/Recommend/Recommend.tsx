import React from 'react'
import {View,Text, TouchableNativeFeedback} from "react-native";
import {NavigationScreenProps, NavigationState, NavigationScreenProp} from 'react-navigation';

type State={

}
type Props={
	navigation:NavigationScreenProp<NavigationState>,
}
class Recommend extends  React.PureComponent<Props,State>{
	handlePress=()=>{
		this.props.navigation.navigate("Player")
	}
	render(){
		return(
			<View>
				<Text>推荐</Text>
				<TouchableNativeFeedback onPress={this.handlePress}>
					<Text>点击</Text>
				</TouchableNativeFeedback>
			</View>
		)
	}
}

export {Recommend}
