import React, { Component } from 'react';
import { View, Button, ToastAndroid,Text } from 'react-native';
//import WSconnection from './websocket';
import {ws} from '../wsconnect';


export default class Register extends Component {
    constructor(props){
        super(props);
        this.apiws = null;
        this.registerUser = this.registerUser.bind(this);
        
    }
    componentWillMount(){
        ws.apiws.onopen = ()=>{
            console.log('on open is called');
            console.log('websocket is open:' + this.apiws.readyState);
        }
        ws.apiws.onmessage = (msg)=>{
            ToastAndroid.show(msg.data ,ToastAndroid.SHORT);
            console.log(msg.data);
        };
        ws.apiws.onerror = (e)=>{
            console.log('on error is called. error');
            console.log(e);
        };
        ws.apiws.onclose = ()=>{
            console.log('WebSocket connection closed');
        };
    }
    // componentWillUnmount(){
    //     this.apiws.close(1000, 'Closing normally');
    // }
    registerUser(){
        //console.log(this.apiws.readyState);
        ws.apiws.send('hello');
        this.props.navigation.navigate('TabNav');
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