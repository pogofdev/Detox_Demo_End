import React, { Component } from 'react';
import Wallpaper from "./Wallpaper";
import Logo from "./Logo";
import Form from "./Form";

class LoginScreen extends Component {
    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarHidden: true,
    };

    constructor() {
        super();
        this.state = {restartAllowed: true};
    }


    render() {
        return (
            <Wallpaper>
                <Logo/>
                <Form/>
            </Wallpaper>
        );
    }
}



export default (LoginScreen);