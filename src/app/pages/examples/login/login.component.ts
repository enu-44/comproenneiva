import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { LoginService } from '../../../core/login/login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { AccountService } from 'src/app/core/auth/account.service';

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  focus: any;
  focus1: any;
  verPass = false

  //@ViewChild('username', { static: false })
  //username?: ElementRef;

  authenticationError = false;

  loginForm:FormGroup;

  modelLogin={
    username: '',
    password: '',
    rememberMe: false
  }

  constructor(
    private accountService:AccountService,
    private location: Location,
    private _cd: ChangeDetectorRef,
    private loginService: LoginService,
     private router: Router, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm=this.createForm()
    this._cd.detectChanges();
  }
  createForm():FormGroup{
    return this.formBuilder.group({
      username: [null,[Validators.required]],
      password: [null,[Validators.required]],
      rememberMe: [false]
    })
  }


  ngAfterViewInit(): void {
   /*  if (this.username) {
      this.username.nativeElement.focus();
    } */

    if(this.accountService.identity(true)){
      if(this.accountService.isAuthenticated()){
        this.location.back()
      }
    }
  }

  cancel(): void {
    this.authenticationError = false;
    this.loginForm.patchValue({
      username: '',
      password: ''
    });
    // this.activeModal.dismiss('cancel');
  }

  userNameKey(value){
    this.loginForm.get("username").setValue(value.srcElement.value)
  }

  passwordKey(value){
    this.loginForm.get("password").setValue(value.srcElement.value)
  }

  recorderKey(value){
    this.loginForm.get("rememberMe").setValue(value.srcElement.checked)
  }

  login(loginForm:FormGroup): void {
    let event = loginForm.getRawValue()
    this.loginService
      .login(event)
      .subscribe(
        () => {
          this.authenticationError = false;
         // this.activeModal.close();
         /*  if (
            this.router.url === '/account/register' ||
            this.router.url.startsWith('/account/activate') ||
            this.router.url.startsWith('/account/reset/')
          ) {
            this.router.navigate(['']);
          } */
          this.location.back()
          // this.router.navigate(['../comprador/components'])
        },
        () => (this.authenticationError = true)
      );
  }

  registrarCuenta(): void {
    this.router.navigate(['../comprador/components'])

  }

  requestResetPassword(): void {
    this.router.navigateByUrl('/examples/recuperar-contrasena')
  }
}
