import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Image} from 'react-native';

export default class SendRequest extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../images/huaji.png')}/>
                <Text>{this.state.username}</Text>
                <TextInput 
                    onChangeText={(note)=>this.setState({note})}/>
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
        backgroundColor: '#f8fdff',
    },
});