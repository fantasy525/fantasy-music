import React from 'react'
import TopView from './../TopView/TopView';
import LoadingMan from './LoadingView';
import { View } from 'react-native';

class Loading{

    private static key:number;
    static show(json:string):Promise<void>{
       return new Promise((resolve,reject)=>{
        TopView.add(<View  style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <LoadingMan style={{width:dp(200)}} source={json} />
        </View>,(key:number)=>{
            this.key=key;
            resolve()
        })
       })
    }
    static hide():Promise<void>{
       return new Promise((resolve,reject)=>{
        TopView.remove(this.key,()=>{
            resolve()
        })
       })
    }
}
export {Loading}