import {View, ViewStyle, StyleProp} from 'react-native'
import React,{PureComponent} from 'react'
import LottieView from 'lottie-react-native'; 
type Props={
  source?:string,
  style:StyleProp<ViewStyle>
}

class LoadingView extends PureComponent<Props>{
  static defaultProps={
    source:require('./runnerman.json')
  }
    render() {
        return (
          <LottieView
          style={[{width:200},this.props.style]}
          source={this.props.source}
          autoPlay
          loop
        />
        );
      }
}
export default LoadingView
