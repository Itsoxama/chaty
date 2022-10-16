import { Injectable, OnInit } from '@angular/core';
import { io } from "socket.io-client";
import { gb } from './asd';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket:any;

  constructor() {   }

sendcallto(id:any,peer:any,user:any){
  
  var a=localStorage.getItem("myid")


  this.socket.emit('voice call', id,peer,user);

}
  setupSocketConnection() {

    
  var a=localStorage.getItem("myid")
    
    this.socket = io(gb.apiURL+'/');
   
  }



  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
}
}