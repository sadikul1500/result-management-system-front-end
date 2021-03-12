import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../shared/user-account.service';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styles: [
  ]
})
export class UserAccountComponent implements OnInit {

  constructor(public service: UserAccountService, public currentUser: LoginService,
    public router: Router) { }

  ngOnInit(): void {
    console.log(this.currentUser.getUsername());

    /*if(this.currentUser.getUser() != 0)
    {
      this.service.refreshUserList();
      this.service.refreshResultList();
    }*/

    if(this.currentUser.getUsername() != 0)
    {
      this.service.refreshUserList();
      this.service.refreshResultList();
    }

    else{
      this.router.navigate([`denied`]);
    }
    
  }

  public logout(): void{
    this.currentUser.logout();
    this.router.navigate(['']);
  }

}
