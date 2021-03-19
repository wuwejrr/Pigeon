import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import {ws} from '../wsconnect';
import {apiutil} from '../util/ApiUtil';

export default class SearchFriend extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:'',
            friendarray:Array()
        };
        this.searchFriend = this.searchFriend.bind(this);
        this.searchGroup = this.searchGroup.bind(this);
    }
    searchFriend(){
        let jsonstr = {"keyword":this.state.keyword}
        ws.apiws.send(apiutil('api','searchfriend',jsonstr));
        ws.apiws.onmessage=(msg)=>{
            console.log(msg.data);
            var message = JSON.parse(msg.data);
            console.log(message.data.result)
            if(message.code == 200){
                this.setState({
                    friendarray: message.data.result,
                });
            }
        }
    }
    searchGroup(){
        console.log(this.state.friendarray);
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder={"请输入用户名/群号"}
                    onChangeText={(keyword)=>this.setState({keyword})}/>
                <Button
                    onPress={()=>this.searchFriend()}
                    title={"搜索用户"}/>
                <Text></Text>
                <Button
                    onPress={()=>this.searchGroup()}
                    title={"搜索群"}/>
                <Text> </Text>
                <FlatList
                    data={this.state.friendarray}
                    renderItem={({item}) => 
                            <Text style={styles.item}>{item.id}</Text>
                    }/>
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