import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../../login-page/login-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(
    public authService: LoginPageComponent,
    private router: Router,
  ) { }
  
  ngOnInit() { }

  goToLogIn() {
    this.router.navigate([''])
  }
}