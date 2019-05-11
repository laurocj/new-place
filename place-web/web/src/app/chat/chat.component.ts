import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  private serverUrl : String = 'http://localhost:8888/socket'
  private stompClient : any;

  public messages : String[]  = []; 

  public msgInput : FormControl = new FormControl('');

  constructor(){
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
  }


  public initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          that.messages.push(message.body);
        }
      });
    });
  }

  public sendMessage() {
    this.stompClient.send("/app/send/message" , {}, this.msgInputValue);
    this.clearMsgInput();
  }

  private clearMsgInput() : void{
    this.msgInputValue = '';
  }

  set msgInputValue(value : string) {
    this.msgInput.setValue(value);
  }

  get msgInputValue() {
    return this.msgInput.value;
  }

}
