import React,{ Component } from 'react';
import { View, StyleSheet, Button, Text, BackHandler, ToastAndroid } from 'react-native';
import TabNav from '../navigator/TabNav';

export default class MainPage extends Component {
    constructor(props){
        super(props);
        BackHandler.addEventListener('handwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            BackHandler.exitApp();
          }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
        return true;
    }
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.addfriendArea}>
                        <Text>会话列表</Text>
                        <Button
                            title='添加好友'
                            onPress={()=>
                                this.props.navigation.navigate('SearchFriend')}/>
                    </View>
                </View>
                <TabNav navigation={this.props.navigation}/>
            </View>
        );
    }
}

MainPage.router = TabNav.router;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fdff',
    },
    addfriendArea: {
        flexDirection: 'row',
        justifyContent:'space-between',
        //paddingLeft:280,
        backgroundColor: 'blue',
        //marginLeft: 100
    }
});