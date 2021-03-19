import React from 'react';
import { StackNavigator,Button } from 'react-navigation';
import Register from '../page/Register';
import Login from '../page/Login';
import MainPage from '../page/MainPage';
import ChatPage from '../page/ChatPage';
import SearchFriend from '../page/SearchFriend';

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
                backgroundColor: '#f8fdff',
                height:40,
                elevation: 0,//阴影
            },
            headerTitleStyle:{
                alignSelf:'center'
            },
            headerRight:()=><Button></Button>,
        }
    },
    MainPage:{
        screen: MainPage,
        navigationOptions :{
            header:null,
        },
    },
    ChatPage:{
        screen:ChatPage,
        navigationOptions :{
            headerTitle: 'Devin',
            headerStyle:{
                backgroundColor: '#f8fdff',
                height:40,
                elevation: 0,//阴影
            },
            headerTitleStyle:{
                alignSelf:'center'
            },
            headerRight:()=><Button></Button>,
        },
    },
    SearchFriend:{
        screen:SearchFriend,
        navigationOptions :{
            headerTitle: '添加好友',
            headerStyle:{
                backgroundColor: '#f8fdff',
                height:40,
                elevation: 0,//阴影
            },
            headerTitleStyle:{
                alignSelf:'center'
            },
            headerRight:()=><Button></Button>,
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
});