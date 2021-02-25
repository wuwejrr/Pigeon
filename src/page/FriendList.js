import React,{ Component } from 'react';
import { View, FlatList, StyleSheet, Text} from 'react-native';

export default class FriendList extends Component{
    render() {
        return(
            <View style={styles.container}>
                <FlatList 
                    data={[
                        {key: 'Devin',content:'123'},
                        {key: 'Jackson',content:'123'},
                        {key: 'James',content:'123'},
                        {key: 'Joel',content:'123'},
                        {key: 'John',content:'123'},
                        {key: 'Jillian',content:'123'},
                        {key: 'Jimmy',content:'123'},
                        {key: 'Julie',content:'123'},
                    ]}
                    renderItem={({item}) => 
                            <Text style={styles.item}>{item.key}</Text>
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })