import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs/subscription';

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

 // getUser() {
 //   const userId = this.user.uid;
 //   const path = `/users/${userId}`;
 //   return this.db.object(path);
 // }

 // getUsers() {
 //   const path = '/users';
 //   return this.db.list(path);
 // }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    //const email = this.user.email;
    const email = 'this.user.email;'
    // this.chatMessages = this.getMessages();
    // this.chatMessages.push();
    const messageObject = {
      message: msg,
      timeSent: timestamp,
      email: email }

    this.messagesDB.set("message", messageObject)

    console.log("called sendmessage")
  }

  // getMessages(): Observable<ChatMessage[]> {
  //   // query to create our message feed binding
  //   return this.db.list('messages', {
  //     query: {
  //       limitToLast: 25,
  //       orderByKey: true
  //     }
  //   });
  // }

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