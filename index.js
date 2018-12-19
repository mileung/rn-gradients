import { AppRegistry } from 'react-native';
import Example from './src/Example';
// import Example from './src/AnotherExample';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Example);

import LinearGradient from './src/LinearGradient';
import RadialGradient from './src/RadialGradient';

export { LinearGradient, RadialGradient };
