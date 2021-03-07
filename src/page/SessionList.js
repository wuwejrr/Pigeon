import React,{ PureComponent } from 'react';
import { View,Text,FlatList } from 'react-native';
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
            <FlatList
                keyExtractor={ this.keyExtractor }
                data={[
                    {username: 'Devin'},
                ]}
                renderItem={ this.renderItem }
                />
        );
    }
}


// const styles = StyleSheet.create({
    
// });