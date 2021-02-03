import React, { Component } from 'react';
import { View, Button, ToastAndroid,Text } from 'react-native';
//import WSconnection from './websocket';
//import {apiws} from '../apiws';


export class Register extends Component {
    constructor(props){
        super(props);
        this.apiws = null;
        this.registerUser = this.registerUser.bind(this);
        
    }
    componentWillMount(){
        // apiws.ws.onmessage = (msg)=>{
        //     ToastAndroid.show(msg.data ,ToastAndroid.SHORT);
        //     console.log(msg.data);
        // };
        // this.apiws = new WebSocket('ws://139.199.160.146:8080');
        // this.apiws.onopen = ()=>{
        //     console.log('on open is called');
        //     console.log('websocket is open:' + this.apiws.readyState);
        // };
        // this.apiws.onmessage = (msg)=>{
        //     ToastAndroid.show(msg.data ,ToastAndroid.SHORT);
        //     console.log(msg.data);
        // };
        // this.apiws.onclose = ()=>{
        //     console.log('WebSocket connection closed');
        // };
        // this.apiws.onerror = (e)=>{
        //     console.log('on error is called. error');
        //     console.log(e);
        // };
    }
    componentWillUnmount(){
        this.apiws.close(1000, 'Closing normally');
    }
    registerUser(){
        //console.log(this.apiws.readyState);
        this.apiws.send('hello');
    }
    render() {
        return(
            <View>
                <Button onPress={() =>
                        this.props.navigation.navigate('Login', { name: 'Jane' })} 
                        title={'Go Back'} />
                <Text> </Text>
                <Button onPress={this.registerUser} 
                        title={'注册'}/>
            </View>
        );
    }
}