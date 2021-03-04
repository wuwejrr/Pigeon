import React from 'react';
import { StackNavigator } from 'react-navigation';
import Register from '../page/Register';
import Login from '../page/Login';
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
        navigationOptions:{
            headerTitle: '注册',
            headerStyle:{
                height:35,
                elevation: 0,//阴影
            }
        }
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
        //headerTintColor:'#333333',
        gesturesEnabled:true,
    },
    mode:'card',  
});