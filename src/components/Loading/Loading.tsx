import React from 'react'
import TopView from './../TopView/TopView';
import LoadingMan from './LoadingView';

class Loading{

    private static key:number;
    static show():Promise<void>{
       return new Promise((resolve,reject)=>{
        TopView.add(<LoadingMan/>,(key:number)=>{
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