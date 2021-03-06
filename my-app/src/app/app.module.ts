import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackService } from './services/feedback.service';
import { FeedbackInputComponent } from './feedback/feedback-input.component';
import { FeedbackListComponent } from './feedback/feedback-list.component';
import { FeedbacksComponent } from './feedback/feedbacks.component';

import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,
    DisplayComponent,

    FeedbackComponent,
    FeedbackInputComponent,
    FeedbackListComponent,
    FeedbacksComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
  AuthService,
  ChatService,
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
