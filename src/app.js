import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener, showLoginForm} from './screens';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

showLoginForm();