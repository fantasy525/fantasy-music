/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 * 
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component, RefObject} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, Alert, StatusBar} from 'react-native';
import LoadingMan from './components/Loading/LoadingView';
import { Loading } from './components/Loading/Loading';
import Sound from 'react-native-sound'
import { Audio} from "./components/Audio/Audio";
import { AppContainer} from './router/router';
import {Provider} from "react-redux";
import {store} from './store/store'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
type State={
	progress:number
}
class App extends Component<Props,State> {
	state:State={
		progress:0
	}
  onHandleClick=()=>{
    this.audio.play()
    Loading.show().then(()=>{
      setTimeout(()=>{
        Loading.hide()
      },3000)
    })
  }
  audio:Audio
  componentDidMount(){

    let url='http://124.193.230.17/amobile.music.tc.qq.com/C4000039MnYb0qxYhV.m4a?guid=1626177875&vkey=CBD2C34E75654D0C8194BA056C48326BA0498AE6426E12B7169E6435D91AA2FA3C4848B96528725702CC8DFEE9FC1EDBA72940B9823FD409&uin=0&fromtag=66'

	  this.audio=new Audio(url,()=>{
    	this.audio.play()
    })
    this.audio.getBufferingUpdate(progress => {
	    this.setState({progress:progress})
    })
   
  }
  componentWillUnmount(){
		this.audio.release()
  }
  
  render() {
    return (
	    <Provider store={store}>
				<StatusBar translucent={true} backgroundColor={"rgba(0,0,0,0)"}/>
		    <AppContainer/>
	    </Provider>
    );
  }
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
