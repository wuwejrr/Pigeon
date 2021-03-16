import React, { Component } from 'react';
import { Text, 
        Dimensions, 
        PixelRatio, 
        View, 
        StyleSheet,  
        TextInput, 
        Button, 
        ToastAndroid } from 'react-native';
//import { StackNavigator } from 'react-navigation';
import NavHome from '../navigator/NavHome';
import {ws} from '../wsconnect';
import {apiutil} from '../util/ApiUtil';

let widthOfMargin = Dimensions.get('window').width * 0.03;
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputedNum:'',
            inputedPW:''
        };
        this.onButtonPress = this.onButtonPress.bind(this);
    }
    onButtonPress(){
        var username = this.state.inputedNum;
        var password = this.state.inputedPW;
        var jsonstr = { "username": username, "password": password};
        //ws.apiws.send(apiutil('api','login',jsonstr));
        //ws.apiws.onmessage = (msg)=>{
            //ToastAndroid.show(msg.data ,ToastAndroid.SHORT);
            //console.log(msg.data);
            //var message = JSON.parse(msg.data);
            if(1){
                ToastAndroid.show("登录成功" ,ToastAndroid.LONG);
                this.props.navigation.navigate('MainPage');
            }else{
                ToastAndroid.show("用户名或密码错误，请重新输入" ,ToastAndroid.SHORT);
            }
        //};
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputArea}>
                    <TextInput style={styles.textInputStyle}
                        placeholder={'请输入用户名'} 
                        onChangeText={(inputedNum)=>this.setState({inputedNum})}/>
                    <TextInput style={styles.textInputStyle}
                        placeholder={'请输入密码'}
                        secureTextEntry
                        onChangeText={(inputedPW)=>this.setState({inputedPW})}/>
                </View>
                <View style={styles.bottonArea}>
                    <Text> </Text>
                    <Button 
                        style={styles.bottonStyle}
                        title='登录'
                        onPress={this.onButtonPress}/>
                    <Text> </Text>
                    <Button
                        title='注册'
                        onPress={() =>
                            this.props.navigation.navigate('Register')
                        }/>
                </View>
            </View>
        );
    }
}

//样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f8fdff',
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