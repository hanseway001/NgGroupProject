import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../../login-page/login-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  constructor(
    public authService: LoginPageComponent,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  goToLogIn() {
    this.router.navigate([''])
  }
}