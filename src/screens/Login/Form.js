import React, {Component} from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

import {showHomeScreen} from '../../screens';

import {FONT_SIZE_15, HIGHLIGHT_TEXTINPUT_COLOR, YELLOW_COLOR} from "../../constants";
import {Button, FormValidationMessage} from "react-native-elements";
import TextField from "../../components/TextField/TextField";


class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wrongPass: false,
            userId: ''
        };
    }

    _onPress() {
        const {userId} = this.state;
        if(userId==='M0001'){
            this.setState({wrongPass:false},()=>showHomeScreen());
        }else{
            this.setState({wrongPass:true});
        }

    }


    render() {
        const {wrongPass, userId} = this.state;

        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                // keyboardVerticalOffset={25}
            >
                <View style={{flex: 0.6, marginHorizontal: 20}}>
                    <TextField
                        testID="test_tfMaKh"
                        label='User ID'
                        highlightColor={HIGHLIGHT_TEXTINPUT_COLOR}
                        inputStyle={{height: 40, color: YELLOW_COLOR}}
                        onChangeText={(userId) => this.setState({userId})}
                        value={userId}
                        autoCorrect={false}
                    />
                    {wrongPass ?
                        <FormValidationMessage testID="test_ValidationMessage">Wrong
                            UserID</FormValidationMessage> : null}
                </View>
                <View style={{flex: 0.4}}>
                    <Button
                        testID="test_btnLogin"
                        onPress={this._onPress.bind(this)}
                        fontSize={FONT_SIZE_15}
                        backgroundColor={YELLOW_COLOR}
                        large
                        borderRadius={3}
                        background={Platform.OS !== 'ios' ? TouchableNativeFeedback.SelectableBackground() : ''}
                        title='Submit'/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

//
// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
    },
    btnEye: {
        position: 'absolute',
        top: 60,
        right: 28,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    button: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: YELLOW_COLOR,
        height: 60,
        borderRadius: 3,
        marginHorizontal: 20,
        zIndex: 100,
    },
});


export default (FormLogin);