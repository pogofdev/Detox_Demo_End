import React, {Component} from 'react';
import {
    StyleSheet,
    View,

    Image,
    Dimensions
} from 'react-native';

import logoImg from '../../../img/login/logo.png';


export default class Logo extends Component {
    render() {
        return (
            <View testID="test_welcome_logo" style={styles.container}>
                <Image source={logoImg} style={styles.image}/>
            </View>
        );
    }
}
// const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width * 0.6,
        resizeMode: 'contain'

    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    }
});
