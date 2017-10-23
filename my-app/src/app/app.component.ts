import { Component } from '@angular/core';
// import { SignupFormComponent } from '../app/signup-form/signup-form.component';
// import { LoginFormComponent } from '../app/login-form/login-form.component';
// import { ChatroomComponent } from '../app/chatroom/chatroom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Presentation App';
  color: string; //added by Jared to practice Attribute directives
}
