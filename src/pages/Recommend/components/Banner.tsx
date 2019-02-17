import React from 'react'
import Swiper from 'react-native-swiper';
import { View, Image, StyleSheet } from 'react-native';
import { IBanner } from '../interface';
import { Loading } from 'src/components/Loading/Loading';
import LoadingView from './../../../components/Loading/LoadingView';

type Props={
    banners:Array<IBanner>
}

/**
 * 推荐页面的轮播图组件
 * @param props 
 */
const Banner:React.FC<Props>=React.memo((props)=>{
    if(props.banners.length===0){
        return <LoadingView style={{width:dp(200)}} source={require('src/LottieJson/loadingCircle.json')}/>
    }
    return(
       <View style={{width:dp(720),overflow:'hidden',height:dp(320)}}>
            <Swiper
        style={styles.swiper}
    
        height={320}
        autoplay={true}
        loop={true}
        horizontal={true}
        dotColor={"#ffffff"}
        activeDotColor={"#EAF809"}
        paginationStyle={{bottom: 10}}
        showsButtons={false}>
        {
           props.banners.map((banner,index)=>{
                return (
                    <View pointerEvents={"box-only"}  key={banner.imageUrl}>
                        <Image  source={{uri:banner.imageUrl}} style={styles.swiperImg}/>
                    </View>
                )
            })
        }

    </Swiper>
       </View>
    )
})
export {
    Banner
}



const styles=StyleSheet.create({
    swiperImg:{
		width:dp(720),
		height:dp(320),
		borderRadius:dp(20),
		position:'absolute'
    },
	swiper:{
		width:dp(720),
        height:dp(320),
       
	
		

	}
})