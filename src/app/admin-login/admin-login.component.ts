import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  invalidLogin: boolean = false;

  constructor(private router: Router) { }

  checkLogin() {
    if (this.username == 'sangeetha' && this.password == 'sangi5201') {
      sessionStorage.setItem('username', this.username);
      this.router.navigate(['admin']);
      return true;
    } else {
      alert('Wrong credential');
      this.router.navigate(['home']);
      return false;
    }
  }
}
