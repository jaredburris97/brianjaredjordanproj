import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log(User);
    if (this.email === undefined || this.password === undefined){
      alert("Undefined data. Please enter valid data.");
    } else {
      console.log('login() called from login-form component');
      this.authService.login(this.email, this.password)
      .catch(error => this.errorMsg = error.message);
    }    
  }
}