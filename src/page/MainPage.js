import React,{ Component } from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';
import TabNav from '../navigator/TabNav';

export default class MainPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.addfriendArea}>
                        <Text>会话列表</Text>
                        <Button
                            title='添加好友'
                            onPress={()=>alert(1)}/>
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