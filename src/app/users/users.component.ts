import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Users } from '../shared/users.model';
import { UsersService } from '../shared/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})

export class UsersComponent implements OnInit {

  constructor(public service: UsersService, public admin: LoginService,
    public router: Router) { }

  ngOnInit(): void {
    if(this.admin.getUsername() == 101010)
    {
      this.service.refreshList();
    }
    else{
      this.router.navigate([`denied`]);
    }
    

  }

  onDelete(id: number)
  {
    
    if(confirm("Are you sure to delete this record?"))
    {
      this.service.deleteUserDetails(id).subscribe(
        res=>{
          this.service.refreshList();
          console.log("delted sucessfully")
        },
        err=>{
          console.log(err);
        }
      )
    }
    
    
  }

  public logout(): void{
    this.admin.logout();
    this.router.navigate(['']);
  }

}
