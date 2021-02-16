import React from 'react';
import { StackNavigator } from 'react-navigation';
import Register from '../component/Register';
import Login from '../component/Login';
import TabNav from './TabNav';

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
    TabNav:{
        screen: TabNav,
        navigationOptions :{
            header:null,
        },
    }
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