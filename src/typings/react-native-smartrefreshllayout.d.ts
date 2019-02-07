

declare module 'react-native-smartrefreshlayout'{
    import { ViewProps, ViewStyle, StyleProp } from 'react-native';
    import React, { ReactElement } from 'react'
    type Props={
        style:StyleProp<ViewStyle>
    }
   export  class SmartRefreshControl extends React.Component<any>{
    finishRefresh:(params:any)=>void
    reset:()=>void
   }
   const AnyHeader:React.ComponentType<any>
   export{AnyHeader} 
   const DefaultHeader:React.ComponentType<any>
   export{DefaultHeader} 
}