import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Image, ToastAndroid} from 'react-native';
import {ws} from '../wsconnect';
import {apiutil} from '../util/ApiUtil';

export default class SendRequest extends Component {
    constructor(props){
        super(props);
        this.state = {
            note:"",
        }
        this.sendAddFriendRequest = this.sendAddFriendRequest.bind(this);
    }
    componentWillMount(){
        storage.load({
            key: 'uid',
        }).then(ret => {
            console.log(ret);
            this.setState({
                from_uid: ret
            });
        }).catch(err => {
            console.warn(err.message);
        })
        const { params } = this.props.navigation.state;
        console.log(this.state.from_uid)
        this.setState({
            id: params.id,
            username: params.username,
        });
    }
    sendAddFriendRequest(){
        console.log(this.state.from_uid);
        var json = {"from_id":this.state.from_uid,"to_id":this.state.id,"note":this.state.note};
        ws.apiws.send(apiutil('api','sendrequest',json));
        ws.apiws.onmessage = (msg)=>{
            alert(msg.data);
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../images/huaji.png')}/>
                <Text>{this.state.username}</Text>
                <Text>你需要发送验证申请，等待对方通过</Text>
                <TextInput 
                    onChangeText={(note)=>this.setState({note})}/>
                <Button 
                    title='添加好友'
                    onPress={()=>
                        this.sendAddFriendRequest()}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fdff',
    },
});