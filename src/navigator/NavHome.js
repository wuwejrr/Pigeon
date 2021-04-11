import React from 'react';
import { StackNavigator,Button } from 'react-navigation';
import Register from '../page/Register';
import Login from '../page/Login';
import MainPage from '../page/MainPage';
import ChatPage from '../page/ChatPage';
import SearchFriend from '../page/SearchFriend';
import PersonalPage from '../page/PersonalPage';
import SendRequest from '../page/SendRequest';

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
                height:43,
                elevation: 0,//阴影
            },
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
                height:43,
                elevation: 0,//阴影
            },
        },
    },
    SearchFriend:{
        screen:SearchFriend,
        navigationOptions :{
            headerTitle: '搜索',
            headerStyle:{
                backgroundColor: '#f8fdff',
                height:43,
                elevation: 0,//阴影
            },
        },
    },
    PersonalPage:{
        screen:PersonalPage,
        navigationOptions :{
            headerTitle: '详细资料',
            headerStyle:{
                backgroundColor: '#f8fdff',
                height:43,
                elevation: 0,//阴影
            },
        },
    },
    SendRequest:{
        screen:SendRequest,
        navigationOptions:{
            headerTitle: '添加好友',
            headerStyle:{
                backgroundColor: '#f8fdff',
                height:43,
                elevation: 0,//阴影
            },
        }
    }
},
{
    navigationOptions:{
        gesturesEnabled: true,
        gestureResponseDistance: {
            vertical: 150,
            horizontal: 150
        } ,
        headerBackTitle:null,
        //headerTintColor:'#333333',
        gesturesEnabled:true,
        headerTitleStyle:{
            alignSelf:'center'
        },
        headerRight:()=><Button></Button>,
    },
});