let url =require('./config.json');

class WebsocketConnection {
    //static ws;
    constructor(){
        this.apiws = new WebSocket(url.apiurl);
        this.chatws = new WebSocket(url.chaturl);
    }
}

export var ws = new WebsocketConnection;