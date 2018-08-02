import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  invalidLogin: boolean;

   constructor(
     private router: Router ,
     private authService: AuthService
   ){}

  signIn(credentials) {
       console.log('credentials' , credentials.email);
       if(credentials.email == 'vaibhav' && credentials.password == 'deore') {
         this.router.navigate(['/navbar']);
       }
  }

  }


