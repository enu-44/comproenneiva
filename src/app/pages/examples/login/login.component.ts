import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  focus: any;
  focus1: any;
  verPass = false

  constructor(private router: Router) {}

  ngOnInit() {}

  olvidarContrasena() {
    this.router.navigate(['/recuperar-contrasena'])
  }
}
