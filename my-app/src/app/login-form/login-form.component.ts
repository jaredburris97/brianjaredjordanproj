import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

	constructor() {  }

	ngOnInit() {

	}

	// alert("Login-form component.ts!!!");

	// email: string;
	// password: string;
	// displayName: string;
	// errorMsg: string;

	// logIn() {
 //    	const email = this.email;
 //    	const password = this.password;
 //    	const displayName = this.displayName;
 //    	this.authService.logIn(email, password, displayName)
 //    		.then(resolve => this.router.navigate(['chat']))
 //    		.catch(error => this.errorMsg = error.message);
	// }
}