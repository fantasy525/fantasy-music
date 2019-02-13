/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry,YellowBox} from 'react-native';
import './src/Utils/global'
import App from './src/App';
import {name as appName} from './app.json';
YellowBox.ignoreWarnings(['WebView','Accessing view']);
AppRegistry.registerComponent(appName, () => App);
