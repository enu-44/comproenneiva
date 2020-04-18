import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { LoginService } from '../../../core/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private _cd: ChangeDetectorRef,

    private loginService: LoginService, private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {

    this.loginForm=this.createForm()
    this._cd.detectChanges();
  }
  createForm():FormGroup{
    return this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
      rememberMe: [false]
    })
  }


  ngAfterViewInit(): void {
   /*  if (this.username) {
      this.username.nativeElement.focus();
    } */
  }

  cancel(): void {
    this.authenticationError = false;
    this.loginForm.patchValue({
      username: '',
      password: ''
    });
    // this.activeModal.dismiss('cancel');
  }

  login(loginForm:FormGroup) {

    console.log("FORM: ", this.loginForm)
    let event = loginForm.getRawValue()

   /*  let request = {
      username: this.loginForm.get('username')!.value,
      password: this.loginForm.get('password')!.value,
      rememberMe: this.loginForm.get('rememberMe')!.value
    }; */

    this.loginService
      .login(event)
      .subscribe(
        () => {
          this.authenticationError = false;
         // this.activeModal.close();
          if (
            this.router.url === '/account/register' ||
            this.router.url.startsWith('/account/activate') ||
            this.router.url.startsWith('/account/reset/')
          ) {
            this.router.navigate(['']);
          }
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
