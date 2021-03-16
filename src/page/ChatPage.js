import React,{Component} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatPage extends Component {
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: require('../../images/huaji.png'),
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
                label="发送"
                onSend={messages => this.onSend(messages)}
                showUserAvatar={true}
                user={{
                    _id: 1,
                    avatar: require('../../images/huaji.png'),
                }}
            />
        )
    }
}