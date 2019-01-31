import { ComponentProvider } from "react-native";

declare module 'react-native'{
   export  namespace AppRegistry{
        function registerComponentOld(appKey: string, getComponentFunc: ComponentProvider): string;
    }
}