import { RoomComponent } from './room/room.component';
import { AppComponent } from './app.component';
import { SocketioService } from './socketio.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {SimplePeer} from "simple-peer"
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';



import {AngularFireStorage,AngularFireUploadTask, AngularFireStorageModule } from '@angular/fire/compat/storage'
import {AngularFireModule } from '@angular/fire/compat'
import { gb } from './asd';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrw2iFjGdg19LuffabIDKjqq6Q8JqkVM",
  authDomain: "screenshot-afa24.firebaseapp.com",
  projectId: "screenshot-afa24",
  storageBucket: "screenshot-afa24.appspot.com",
  messagingSenderId: "42637398531",
  appId: "1:42637398531:web:57f201ae4ab461c6ea3436"
};
const config: SocketIoConfig = { url: gb.apiURL+'/', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SocketIoModule.forRoot(config),

    AngularFireModule.initializeApp(firebaseConfig,'cloud'),
AngularFireStorageModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
