import React,{ Component } from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import {ws} from '../wsconnect';
import {} from '../util/ApiUtil';

export default class RequestList extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        //ws.apiws.send();
        ws.apiws.onmessage = () => {
            
        }
    }
    render(){
        return (
            <View>
                <Text>123</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fdff',
    },
    addfriendArea: {
        paddingLeft:280,
        backgroundColor: 'blue',
        //marginLeft: 100
    }
});