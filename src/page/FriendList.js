import React,{ Component } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { FriendListItem } from '../component/FriendListItem';

export default class FriendList extends Component{
    constructor(props){
        super(props);
    }
    keyExtractor = (item, index) => index;

    clickItem= (index,name) =>{
        alert(index+"+"+name)
        //this.props.navigation.navigate('ChatPage');
    }
    renderItem = ({item}) => (
        <FriendListItem
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
                        {username: 'Devin',content:'123'},
                        {username: 'Jackson',content:'123'},
                        {username: 'James',content:'123'},
                        {username: 'Joel',content:'123'},
                        {username: 'John',content:'123'},
                        {username: 'Jillian',content:'123'},
                        {username: 'Jimmy',content:'123'},
                        {username: 'Julie',content:'123'},
                    ]}
                    renderItem={this.renderItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     //paddingTop: 22
    },
    addfriendArea: {
        paddingLeft:280,
        backgroundColor: 'blue',
        //marginLeft: 100
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })