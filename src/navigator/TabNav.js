import React from 'react';
import { TabNavigator } from 'react-navigation';
import SessionList from '../page/SessionList';
import FriendList from '../page/FriendList';

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
},{
    tabBarPosition: 'bottom',
});