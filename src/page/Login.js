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

let widthOfMargin = Dimensions.get('window').width * 0.03;
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputedNum:'',
            inputedPW:''
        };
        this.updatePW = this.updatePW.bind(this);
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
        return (
            <View style={styles.container}>
                <View style={styles.inputArea}>
                    <TextInput style={styles.textInputStyle}
                        placeholder={'请输入用户名'} />
                    <TextInput style={styles.textInputStyle}
                        placeholder={'请输入密码'}
                        secureTextEntry
                        onChangeText={this.updatePW}/>
                </View>
                <View style={styles.bottonArea}>
                    <Text> </Text>
                    <Button 
                        style={styles.bottonStyle}
                        title='确定'
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