import React from 'react';
import { TabNavigator } from 'react-navigation';
import SessionList from '../component/SessionList';
import FriendList from '../component/FriendList';

export default TabNav = TabNavigator({
    SessionList:{ screen:SessionList },
    FriendList:{ screen:FriendList },
});