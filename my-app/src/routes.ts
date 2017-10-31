import { Routes } from '@angular/router';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { DisplayComponent } from './app/display/display.component';
import { FeedbacksComponent } from './app/feedback/feedbacks.component';
import { AuthGuard } from './app/guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'signup', component: SignupFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'chat', component: ChatroomComponent, canActivate: [AuthGuard]},
    { path: 'display', component: DisplayComponent, canActivate: [AuthGuard] },
    { path: 'feedback', component: FeedbacksComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];
