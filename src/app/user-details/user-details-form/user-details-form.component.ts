import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NOTFOUND } from 'dns';
import { logging } from 'protractor';
import { LoginService } from 'src/app/shared/login.service';
import { UserDetails } from 'src/app/shared/user-details.model';
import { UserDetailsService } from 'src/app/shared/user-details.service';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styles: [ ]
})
export class UserDetailsFormComponent implements OnInit {

  constructor( public service: UserDetailsService, public router: Router, 
    public admin: LoginService ) { }

  ngOnInit(): void {
  }

  //signUp = false;
  add = false;
  update = false;
  //sign_In = true;
/*
  public SignUp(): void {
    this.signUp = true;
    this.sign_In = false;
    this.update = false;
  }

  public SignIn(): void {
    this.signUp = false;
    this.sign_In = true;
    this.update = false;
  }
  */
  public Update():void{
    this.update = true;
    this.add = false;
    //this.signUp = false;
    //this.sign_In = false;
  }

  public Add(): void{
    this.add = true;
    this.update = false;
  }
  
  viewUsers(){
    this.router.navigate([`users`]);
  }
  

  onSubmit(form: NgForm){
    if(this.add)
    {
      this.service.postUserDetails().subscribe(
        res=>
        {
          console.log('successfully signed up');
          this.service.refreshList();
          this.resetForm(form);
        },
        err=>
        {
          console.log(err);
        },
      )
    }

    else {
      this.updateInfo(form);
    }
    /*
    else
    {
      this.logIn(form);
      //this.updateInfo(form);
    }
    */
    
  }

  logIn(form: NgForm)
  {
    console.log(this.service.formData.id);
    console.log(this.service.formData.roll);
    /*
    if(this.service.formData.id == 0)
    {
      console.log("not found");
      this.resetForm(form);
    }
    */
    //else{
      /*
      this.service.logInUser().subscribe(
        res=>
        {
          console.log('welcome ' + this.service.formData.roll);
          this.service.refreshList();
          this.resetForm(form);
        },
        err=>
        {
          console.log(err);
        },
      )
      */

    //}
  }

  updateInfo(form: NgForm)
  {
    this.service.putUserDetails().subscribe(
      res=>
      {
        console.log('updated successfully');
        this.service.refreshList();
        this.resetForm(form);
      },
      err=>
      {
        console.log(err);
      },
    )
  }

  resetForm(form: NgForm)
  {
    form.form.reset();
    this.service.formData = new UserDetails();
  }

  public logout(): void
  {
    this.admin.logout();
    this.router.navigate(['']);
  }

}
