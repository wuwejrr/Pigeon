import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TextInput, FlatList } from 'react-native';

export default class AddFriend extends Component {
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
        alert(1);
    }
    searchGroup(){
        alert(1);
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
                            <Text style={styles.item}>{item.key}</Text>
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