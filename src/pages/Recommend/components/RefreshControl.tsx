
import React, { RefObject } from 'react'

import {View,Text, StyleProp, ViewStyle, Animated} from 'react-native'
import { SmartRefreshControl ,AnyHeader} from 'react-native-smartrefreshlayout';
import AnimatedLottieView from 'lottie-react-native';

type State={
    percent:Animated.Value,
    autoPlay:boolean
    
}
class MusicRefreshControl extends React.PureComponent<{onRefresh:()=>void,style:StyleProp<ViewStyle>},State>{
    state:State={
        percent:new Animated.Value(0.1),
        autoPlay:false
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
    autoPlay:boolean=false;
    smartRefresh:RefObject<SmartRefreshControl>=React.createRef()
    lottieView:RefObject<AnimatedLottieView>=React.createRef()
    private onHeaderPulling=(event)=>{// 下拉过程中
        let {percent} = event.nativeEvent;
        if(percent<=1) {
           this.state.percent.setValue(percent)
        }
    }
    private onRefresh=()=>{// 刷新时触发
        let {onRefresh} = this.props;
        onRefresh && onRefresh();
        this.lottieView.current.play()
    }
    timer:number;
    finishRefresh=(params?:any)=>{ //完成下拉
        
        this.smartRefresh.current && this.smartRefresh.current.finishRefresh(params)
      
        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
            this.lottieView.current && this.lottieView.current.reset();
        },500)
       
    }// I am here ...
    height:number=100

    render(){
        return (
            <SmartRefreshControl
                ref={this.smartRefresh}
                style={{flex:1}}
                children={this.props.children}
                onHeaderPulling={this.onHeaderPulling}
                onRefresh={this.onRefresh}
                headerHeight={this.height}
                renderHeader={
                    <AnyHeader style={{alignItems:'center',height:this.height}}>
                     <Animated.View style={{height:this.height,justifyContent:'center',alignItems:'center',transform: [{
                            scale:this.state.percent.interpolate({
                            inputRange: [0,1,2],
                            outputRange: [0.1,1,1],
                        })
                        }]}}>
                         <AnimatedLottieView 
                         speed={6} 
                         progress={this.state.percent}
                         ref={this.lottieView} 
                         style={{width:this.height,height:this.height}} 
                         hardwareAccelerationAndroid
                         source={require('src/LottieJson/pumped-up.json')} />
                        </Animated.View>
                    </AnyHeader>
                }
                
            />
        )
    }
}
export {
    MusicRefreshControl
}