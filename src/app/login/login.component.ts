import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(public service: LoginService, public router: Router) { }

  ngOnInit(): void {
    if(this.service.getUsername() == 101010)
    {
      this.router.navigate([`admin`]);
    }

    else if(this.service.getUsername() != 0)
    {
      this.router.navigate([`userAccount`]);
    }

  }

}
