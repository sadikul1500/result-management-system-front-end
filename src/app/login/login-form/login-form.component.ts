import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/login.model';
import { LoginService } from 'src/app/shared/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})

export class LoginFormComponent implements OnInit {

  constructor( public service: LoginService, public router: Router ) { }

  ngOnInit(): void {
  }

  signIn = false;

  public SignIn(): void{
    this.signIn = true;
  }

  public NewAccount(): void{
    this.signIn = false;
  }

  onSubmit(form: NgForm){
    if(this.signIn)
    {
      this.logIn(form);
    }


    else
    {
      this.resetForm(form);
      console.log('signup called');
      this.changePage('/signup');
      //new account
      //this.updateInfo(form);
    }
    
  }

  changePage(page: string):void
  {
    this.router.navigate([`${page}`]);
  }

  

  logIn(form: NgForm)
  {
    
    console.log(this.service.formData.roll);
    
      this.service.logInUser().subscribe(
        res=>
        {
          //console.log(res);
          //console.log('welcome ' + this.service.formData.roll);
          //this.service.refreshList();
          
          //console.log('welcome ' + this.service.formData.roll);
          
          if(this.service.formData.roll == 101010)
          {
            this.resetForm(form);
            this.changePage('admin');
          }

          else{
            this.resetForm(form);
            this.changePage('userAccount');
          }

          
          
          
        },
        err=>
        {
          console.log(err);
        },
      )

    //}
  }

  

  resetForm(form: NgForm)
  {
    form.form.reset();
    this.service.formData = new Login();
  }



}
