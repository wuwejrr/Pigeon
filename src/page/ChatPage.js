import React,{Component} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatPage extends Component {
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    avatar: require('../../assets/images/huaji.png'),
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: require('../../assets/images/huaji.png'),
                    },
                },
            ],
        })
    }
    
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                placeholder="请输入信息"
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }
}