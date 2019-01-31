import React, {Component, PureComponent, ReactElement, ReactNode, ReactNodeArray} from "react";
import {StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated} from 'react-native';
type Props={

}

let keyValue = 0;
interface IElements{
	key:number,
	element:ReactElement<any>
}

interface IEventAddParams {
	key:number,
	element:ReactElement<any>,
	completeCallback:(key:number)=>void// 插入完成后的回调,key 为唯一key,移除时使用
}
interface IEventRemoveParams{
	key:number,
	completeCallback:()=>void // 移除完成的回调
}
type State={
	elements:Array<IElements>
}
/**
 * 在静态方法中使用DeviceEventEmitter 来解决无法访问this的问题，为了实现使用类直接调用，只能用静态方法了
 */
export default class TopView extends Component<Props,State> {
	static add(element:ReactElement<any>,completeCallback:(key:number)=>void) {
		let key = ++keyValue;
		const params:IEventAddParams={
			key:key,// 唯一的key
			element:element, // 增加的ReactElement
			completeCallback:completeCallback
		}
		DeviceEventEmitter.emit("addOverlay", params);
		return key;
	}

	static remove(key:number,completeCallback:()=>void) {
		const params:IEventRemoveParams={
			key:key,
			completeCallback:completeCallback
		}
		DeviceEventEmitter.emit("removeOverlay", params);
	}

	static removeAll() {
		DeviceEventEmitter.emit("removeAllOverlay", {});
	}


	constructor(props) {
		super(props);
		this.state = {
			elements: []
		};
		DeviceEventEmitter.addListener("addOverlay", (e:IEventAddParams)=>{this.add(e)});
		DeviceEventEmitter.addListener("removeOverlay", (e:IEventRemoveParams) => this.remove(e));
		DeviceEventEmitter.addListener("removeAllOverlay", (e:IEventRemoveParams) => this.removeAll(e));
	}


	componentWillUnmount() {
		DeviceEventEmitter.removeAllListeners("addOverlay");
		DeviceEventEmitter.removeAllListeners("removeOverlay");
		DeviceEventEmitter.removeAllListeners("removeAllOverlay");
	}

	add(e:IEventAddParams) {
		let {elements} = this.state;
		elements.push(e);
		this.setState({elements},()=>{
			// 插入成功后，执行回调
			e.completeCallback && e.completeCallback(e.key)
		});
	}
	remove(e:IEventRemoveParams) {
		let {elements} = this.state;
		for (let i = elements.length - 1; i >= 0; --i) {
			if(typeof elements[i] === 'object'){
				if ( elements[i].key === e.key) {
					elements.splice(i, 1);
					break;
				}
			}
		}
		this.setState({elements},()=>{
			// 移除成功后，执行回调
			e.completeCallback && e.completeCallback()
		});
	}

	removeAll(e:IEventRemoveParams) {
		let {elements} = this.state;
		this.setState({elements: []},()=>{
			e.completeCallback && e.completeCallback()
		});
	}



	render() {
		let {elements} = this.state;
		return (
			<React.Fragment>
				<PureView>
					{this.props.children}
				</PureView>
				{elements.map((item, index) => {
					return (
						<View key={'topView' + item.key} style={styles.overlay} pointerEvents='box-none'>
							{item.element}
						</View>
					);
				})}
			</React.Fragment>
		);
	}

}

var styles = StyleSheet.create({
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex:999999
	},
});

class PureView extends PureComponent {
	render() {
		return (
			<View style={{flex: 1}}>
				{this.props.children}
			</View>
		);
	}
}

if (!AppRegistry.registerComponentOld) {
	AppRegistry.registerComponentOld = AppRegistry.registerComponent;
}

AppRegistry.registerComponent = function(appKey, componentProvider) {

	class RootElement extends Component {
		render() {
			let Component = componentProvider();
			return (
				<TopView>
					<Component {...this.props} />
				</TopView>
			);
		}
	}

	return AppRegistry.registerComponentOld(appKey, () => RootElement);
}