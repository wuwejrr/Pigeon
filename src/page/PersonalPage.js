import React,{ Component } from 'react';
import { View, StyleSheet, Image, Button, Text} from 'react-native';
import {ws} from '../wsconnect';
import {apiutil} from '../util/ApiUtil';

export default class PersonalPage extends Component {
    constructor(props){
        super(props);
        this.sendAddFriendRequest = this.sendAddFriendRequest.bind(this);
    }
    componentWillMount(){
        const { params } = this.props.navigation.state;
        this.setState({
            id: params.id,
            username: params.username
        });
        //alert(params.id +"+"+params.username);
        let jsonstr = {"uid":params.id}
        ws.apiws.send(apiutil('api','showpersonal',jsonstr));
        ws.apiws.onmessage = (msg)=>{
            console.log(msg.data);
        }
    }
    sendAddFriendRequest(){

    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../images/huaji.png')}/>
                <Text>{this.state.username}</Text>
                <Button 
                    title='添加好友'
                    onPress={this.sendAddFriendRequest()}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f8fdff',
    },
});