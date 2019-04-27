import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  private serverUrl : String = 'http://localhost:8888/socket'
  private stompClient : any;

  public messages : String[]  = []; 

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

  public sendMessage(inputMesage : HTMLInputElement) {
    this.stompClient.send("/app/send/message" , {}, inputMesage.value);
    inputMesage.value = '';
  }
}
