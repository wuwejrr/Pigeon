import React, { PureComponent } from 'react';
import { View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import {Constants} from '../common/Constants';

export class FriendListItem extends PureComponent{
    constructor(props){
        super(props);
        //this.onPress=this.onPress.bind(this);
    }
    onPress = () => {
        this.props.onPressItem(this.props.id,this.props.username);
    };
    render(){
        return(
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.listItemContainer}>
                    <Image style={styles.headImage} source={require('../../images/huaji.png')}/>
                    <View style={styles.info}>
                        <Text style={styles.nickName}>{this.props.username}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1 / Constants.PX_RATIO,
        borderBottomColor: '#DDD'
    },
    headImage: {
        width: 50,
        height: 50,
        marginHorizontal: 15,
        borderRadius: 25,
    },
    info: {
        height: 50,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    nickName: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 50
    }
  });