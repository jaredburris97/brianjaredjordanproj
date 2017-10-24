import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';

import { ChatMessage } from '../models/chat-message.model';

@Injectable()
export class ChatService {
  user: firebase.User;
  chatMessages: Observable<ChatMessage[]>;
  messagesDB: any;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor( private db: AngularFireDatabase, private afAuth: AngularFireAuth){
  	this.afAuth.authState.subscribe(auth => {
  		if ( auth !== undefined && auth !== null) {
  			this.user = auth;
  		}
  	})
  	this.messagesDB = this.db.list("messages")
  	this.chatMessages = this.messagesDB.valueChanges()
  }

//   constructor(
//     private db: AngularFireDatabase,
//     private afAuth: AngularFireAuth
//     ) {
//      this.afAuth.authState.subscribe(auth => {
//        if (auth !== undefined && auth !== null) {
//          this.user = auth;
//        }

//        this.getUser().subscribe(a => {
//          this.userName = a.displayName;
//        });
//      });
// }

 getUser() {
   const userId = this.user.uid;
   const path = `/users/${userId}`;
   return this.db.object(path);
 }

 getUsers() {
   const path = '/users';
   return this.db.list(path);
 }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    // const email = 'this.user.email;'
    // this.chatMessages = this.getMessages();
    // this.chatMessages.push();
    const messageObject = {
      message: msg,
      timeSent: timestamp,
      email: email }

      console.log("called sendmessage");

      //Allows for the addition of messages to the firebase database
      let messages = firebase.database().ref().child("messages").push().key

      let newMessage = firebase.database().ref("messages/" + messages).set(messageObject);
  }

  getMessages() {
    // query to create our message feed bindings
    return this.chatMessages
	}


  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}