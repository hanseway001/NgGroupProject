import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../../login-page/login-page.component';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public routerLinkVariable = "/search"; // the value of the variable is string!
 formBuilder: FormBuilder = new FormBuilder;

  constructor(
    formBuilder: FormBuilder,
    public authService: LoginPageComponent,
    private router: Router,
  ) { }
  ngOnInit() { }

  // SignIn() {
  //   this.router.navigate(['/search'])
  // }

  goToSignUp() {
    this.router.navigate(['/sign-up'])
  }
}