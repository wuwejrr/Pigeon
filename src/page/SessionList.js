import React,{ PureComponent } from 'react';
import { View,Text,FlatList,Button,StyleSheet } from 'react-native';
import { SessionListItem } from '../component/SessionListItem';

export default class SessionList extends PureComponent{
    constructor(props){
        super(props);
        //this.clickItem = this.clickItem.bind(this);
    }
    keyExtractor = (item, index) => index;

    clickItem= (index,name) =>{
        // alert(index+"+"+name)
        this.props.navigation.navigate('ChatPage');
    }
    renderItem = ({item}) => (
        <SessionListItem
            onPressItem={this.clickItem}
            //id={item.id}
            username={item.username}
        />
    );
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    keyExtractor={ this.keyExtractor }
                    data={[
                        {username: 'Devin'},
                        {username: 'Devin2'},
                        {username: 'Devin3'},
                        {username: 'Devin3'},
                        {username: 'Devin3'},
                    ]}
                    renderItem={ this.renderItem }
                    />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fdff',
    },
    addfriendArea: {
        paddingLeft:280,
        backgroundColor: 'blue',
        //marginLeft: 100
    }
});