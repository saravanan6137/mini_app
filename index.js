/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ScriptManager, Script, Federated } from '@callstack/repack/client';

// const resolveURL = Federated.createURLResolver({
//     containers: {
//       news: 'https://github.com/callstack/news-mini-app-showcase/releases/download/news-ios@0.0.1/[name][ext]',
//     },
//   });
  
//   ScriptManager.shared.addResolver(async (scriptId, caller) => {
//     console.log('came here')
//     let url;
//     if (caller === 'main') {
//       url = Script.getDevServerURL(scriptId);
//     } else {
//       url = resolveURL(scriptId, caller);
//     }
  
//     if (!url) {
//       return undefined;
//     }
  
//     return {
//       url,
//       cache: false, // For development
//       query: {
//         platform: Platform.OS,
//       },
//     };
//   });

AppRegistry.registerComponent(appName, () => App);
