import React, { Component } from 'react';
import { Text, 
        Dimensions, 
        PixelRatio, 
        View, 
        StyleSheet, 
        AppRegistry, 
        TextInput, 
        Button, 
        ToastAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Register } from './Register';
//import {apiws} from '../apiws';

let widthOfMargin = Dimensions.get('window').width * 0.03;
export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputedNum:'',
            inputedPW:''
        };
        this.updatePW = this.updatePW.bind(this);
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
    // updateNum(inputedNum) {
    //   this.setState(() => {
    //     return {inputedNum};
    //   });
    // }
    updatePW(inputedPW) {
        this.setState(() => {
            return{inputedPW};
        });
    }
    onButtonPress(){
        ToastAndroid.show('点我了',ToastAndroid.SHORT);
    };
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle} 
                    placeholder={'请输入手机号'}
                    /*onChangeText = {(newText) => this.updateNum(newText)}*/
                    onChangeText = {(inputedNum) => this.setState({inputedNum})} />
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.textInputStyle} 
                    placeholder={'请输入密码'} 
                    secureTextEntry
                    onChangeText={this.updatePW}/>
                <Button color='blue'
                    title='确定' 
                    onPress={this.onButtonPress}/>
                <Text> </Text>
                <Button color='blue'
                    title='注册' 
                    onPress={() =>
                        this.props.navigation.navigate('Register')
                    }/>
            </View>
        );
    }
}
//导航
export default NavHome = StackNavigator({
    Login:{
        screen: Login,
        navigationOptions :{
            header:null,  
        },
    },
    Register:{
        screen: Register,
    },
},
{
    navigationOptions:{
        //header:null,
        headerBackTitle:null,  
        headerTintColor:'#333333',  
        gesturesEnabled:true,
    },
    mode:'card',  
});

//样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInputStyle: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        fontSize: 20
    },
    textPromptStyle: {
        margin: widthOfMargin,
        padding: 0,
        fontSize: 20
    },
    bigTextPrompt: {
        margin: widthOfMargin,
    }
});