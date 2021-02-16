import React from 'react';
import { TabNavigator } from 'react-navigation';
import SessionList from '../component/SessionList';
import FriendList from '../component/FriendList';

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