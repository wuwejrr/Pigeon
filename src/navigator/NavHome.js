import React from 'react';
import { StackNavigator } from 'react-navigation';
import Register from '../component/Register';
import Login from '../component/Login'

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
        gesturesEnabled: true,
        gestureResponseDistance: {
            vertical: 150,
            horizontal: 150
        } ,
        //header:null,
        headerBackTitle:null,  
        headerTintColor:'#333333',  
        gesturesEnabled:true,
    },
    mode:'card',  
});