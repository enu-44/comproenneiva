import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login/login.service';
import { AccountService } from 'src/app/core/auth/account.service';
import { ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-custom',
  templateUrl: './navbar-custom.component.html',
  styleUrls: ['./navbar-custom.component.scss']
})
export class NavbarCustomComponent implements OnInit {

  constructor(private loginService:LoginService, private accountService:AccountService) { }

  ngOnInit() {
    this.accountService.identity(true).subscribe(result=>{
      this.isAuthenticated()
    })
  }


 
  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }


  logout(){
    this.loginService.logout()
  }

}
