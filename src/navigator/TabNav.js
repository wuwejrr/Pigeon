import React from 'react';
import { TabNavigator } from 'react-navigation';
import SessionList   from '../page/SessionList';
import FriendList    from '../page/FriendList';
import RequestList   from '../page/RequestList';

export default TabNav = TabNavigator({
    SessionList:{ 
        screen:SessionList,
        navigationOptions:{
            tabBarLabel: '聊天',
        }
    },
    FriendList:{
        screen:FriendList,
        navigationOptions:{
            tabBarLabel: '好友',
        }
    },
    RequestList:{
        screen:RequestList,
        navigationOptions:{
            tabBarLabel: '好友申请',
        }
    }
},{
    tabBarPosition: 'bottom',
    inactiveBackgroundColor: 'white',
});