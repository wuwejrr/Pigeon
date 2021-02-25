import React, { Component } from 'react';
import { View, Button, ToastAndroid, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
//import WSconnection from './websocket';
import {ws} from '../wsconnect';
import {apiutil} from '../util/ApiUtil';

let widthOfMargin = Dimensions.get('window').width * 0.03;
export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputedNum:'',
            inputedPW:''
        };
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
        var username = this.state.inputedNum;
        var password = this.state.inputedPW;
        var jsonstr = { "username": username, "password": password};
        //apiutil('api','register',jsonstr);
        ws.apiws.send(apiutil('api','register',jsonstr));
        this.props.navigation.navigate('TabNav');
    }
    render() {
        return(
            <View>
                <View style={styles.inputArea}>
                    <TextInput style={styles.textInputStyle}
                        placeholder={'请输入用户名'} 
                        onChangeText={(inputedNum)=>this.setState({inputedNum})}/>
                    <TextInput style={styles.textInputStyle}
                        placeholder={'请输入密码'}
                        secureTextEntry
                        onChangeText={(inputedPW)=>this.setState({inputedPW})}/>
                </View>
                <Button onPress={() =>
                        this.props.navigation.navigate('Login')} 
                        title={'Go Back'} />
                <Text> </Text>
                <Button onPress={this.registerUser}
                        title={'注册'}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputArea: {
        flexDirection: 'column',
        marginTop: widthOfMargin*12,
        //justifyContent: 'space-around',
    },
    bottonArea: {
        padding: widthOfMargin,
        justifyContent: 'space-around',
    },
    textInputStyle: {
        marginLeft: widthOfMargin*2,
        marginRight: widthOfMargin*2,
        //margin: widthOfMargin,
        marginTop:0,
        marginBottom:0,
        //backgroundColor: 'gray',
        fontSize: 16,
    },
    bottonStyle:{
        fontSize: 20,
    }
    // textPromptStyle: {
    //     margin: widthOfMargin,
    //     padding: 0,
    //     fontSize: 20
    // },
});