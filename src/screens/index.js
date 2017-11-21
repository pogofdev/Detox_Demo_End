import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import {Platform} from 'react-native';


import Types from './NavigationTypes';
import Actions from './Actions';
import Transitions from './Transitions';

import Push from './types/Push';
import Drawer from './types/Drawer';
import ListScreen from './types/ListScreen';
import DummyScreen from './types/DummyScreen';
import LightBox from './types/LightBox';
import Notification from './types/Notification';
import Modal from './types/Modal';
import CustomTopBarScreen from './types/CustomTopBarScreen';
import CustomButtonScreen from './types/CustomButtonScreen';
import TopTabs from './types/TopTabs';
import TabOne from './types/tabs/TabOne';
import TabTwo from './types/tabs/TabTwo';

import CollapsingHeader from './transitions/CollapsingHeader';
import SharedElementTransitions from './transitions/SharedElementTransitions';

import Cards from './transitions/sharedElementTransitions/Cards/Cards';
import CardsInfo from './transitions/sharedElementTransitions/Cards/Info';

import Masonry from './transitions/sharedElementTransitions/Masonry/Masonry';
import MasonryItem from './transitions/sharedElementTransitions/Masonry/Item';
import ReactSpinkit from "./ReactSpinkit";
import LoginScreen from "./Login/LoginScreen";

export function registerScreens() {
  Navigation.registerComponent('example.Types', () => Types);
  Navigation.registerComponent('example.Spinkit', () => ReactSpinkit);
  Navigation.registerComponent('example.Actions', () => Actions);
  Navigation.registerComponent('example.Transitions', () => Transitions);

  Navigation.registerComponent('example.Types.Push', () => Push);
  Navigation.registerComponent('example.Types.Drawer', () => Drawer);
  Navigation.registerComponent('example.Types.Screen', () => Drawer);
  Navigation.registerComponent('example.Types.ListScreen', () => ListScreen);
  Navigation.registerComponent('example.Types.DummyScreen', () => DummyScreen);
  Navigation.registerComponent('example.Types.Modal', () => Modal);
  Navigation.registerComponent('example.Types.LightBox', () => LightBox);
  Navigation.registerComponent('example.Types.Notification', () => Notification);
  Navigation.registerComponent('example.Types.CustomTopBarScreen', () => CustomTopBarScreen);
  Navigation.registerComponent('example.Types.CustomButtonScreen', () => CustomButtonScreen);
  Navigation.registerComponent('example.Types.TopTabs', () => TopTabs);
  Navigation.registerComponent('example.Types.TopTabs.TabOne', () => TabOne);
  Navigation.registerComponent('example.Types.TopTabs.TabTwo', () => TabTwo);

  Navigation.registerComponent('example.Transitions.CollapsingHeader', () => CollapsingHeader);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions', () => SharedElementTransitions);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions.Cards', () => Cards);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions.Cards.Info', () => CardsInfo);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions.Masonry', () => Masonry);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions.Masonry.Item', () => MasonryItem);


  Navigation.registerComponent('example.LoginScreen', () => LoginScreen);


}

export function showLoginForm() {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'example.LoginScreen',
            animationType: 'slide-down',// optional, add transition animation to root change: 'none', 'slide-down', 'fade'
        },
        portraitOnlyMode: true,
        passProps: {},
    });
}

export function showHomeScreen(){
    const tabs = [{
        label: 'Navigation',
        screen: 'example.Types',
        icon: require('../../img/list.png'),
        title: 'Navigation Types',
    }, {
        label: 'Actions',
        screen: 'example.Actions',
        icon: require('../../img/swap.png'),
        title: 'Navigation Actions',
    }];

    if (Platform.OS === 'android') {
        tabs.push({
            label: 'Transitions',
            screen: 'example.Transitions',
            icon: require('../../img/transform.png'),
            title: 'Navigation Transitions',
        });
    }

// this will start our app
    Navigation.startTabBasedApp({
        tabs,
        animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
        tabsStyle: {
            tabBarBackgroundColor: '#003a66',
            tabBarButtonColor: '#ffffff',
            tabBarSelectedButtonColor: '#ff505c',
            tabFontFamily: 'BioRhyme-Bold',
        },
        appStyle: {
            tabBarBackgroundColor: '#003a66',
            navBarButtonColor: '#ffffff',
            tabBarButtonColor: '#ffffff',
            navBarTextColor: '#ffffff',
            tabBarSelectedButtonColor: '#ff505c',
            navigationBarColor: '#003a66',
            navBarBackgroundColor: '#003a66',
            statusBarColor: '#002b4c',
            tabFontFamily: 'BioRhyme-Bold',
        },
        drawer: {
            left: {
                screen: 'example.Types.Drawer'
            }
        }
    });

}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
