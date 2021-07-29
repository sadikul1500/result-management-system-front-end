import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../shared/user-details.model';
import { UserDetailsService } from '../shared/user-details.service';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [ ]
})
export class UserDetailsComponent implements OnInit {

  constructor(public service: UserDetailsService, public admin: LoginService,
    public router: Router) { }

  ngOnInit(): void {
    console.log("called");
    if(this.admin.getUsername() == 101010 )
    {
      this.service.refreshList();
    }
    else{
      this.router.navigate([`denied`]);
    }
    //this.service.refreshList();
  }

  populateForm(selectedRecord: UserDetails)
  {
    this.service.formData = Object.assign({}, selectedRecord);
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

