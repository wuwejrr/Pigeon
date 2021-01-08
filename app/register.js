import React, { Component } from 'react';
import { View, Button } from 'react-native';

export class Register extends Component {
    render() {
        return(
            <View>
                <Button onPress={() =>
                        this.props.navigation.navigate('Login', { name: 'Jane' })} 
                        title={'Go Back'} />
            </View>
        );
    }
}