import {Routes} from '@angular/router';
import {SignupFormComponent} from './app/signup-form/signup-form.component';
import {LoginFormComponent} from './app/login-form/login-form.component';
import {ChatroomComponent} from './app/chatroom/chatroom.component';
import {AdminportalComponent} from './app/adminportal/adminportal.component';

export const appRoutes: Routes = [
	{path: 'signup', component: SignupFormComponent},
	{path: 'login', component: LoginFormComponent},
	{path: 'chat', component: ChatroomComponent},
	{path: 'admin', component: AdminportalComponent},
	{path: '', redirectTo: '/login', pathMatch: 'full'},
];