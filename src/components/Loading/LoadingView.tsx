import {View} from 'react-native'
import React,{PureComponent} from 'react'
import LottieView from 'lottie-react-native';   
class LoadingMan extends PureComponent{
    render() {
        return (
         <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <LottieView
            style={{width:200}}
            source={require('./runnerman.json')}
            autoPlay
            loop
          />
         </View>
        );
      }
}
export default LoadingMan
