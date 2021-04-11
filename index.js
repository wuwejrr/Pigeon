import { AppRegistry } from 'react-native';
import NavHome from './src/navigator/NavHome';
require('./src/util/Storage');

AppRegistry.registerComponent('Pigeon', () => NavHome);