import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/shared/signup.model';
import { SignupService } from 'src/app/shared/signup.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styles: [
  ]
})

export class SignupFormComponent implements OnInit {

  constructor(public service: SignupService, public router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
    
    this.service.SignUpUser().subscribe(
      res=>
      {
        console.log('successfully signed up');
        
        this.resetForm(form);
      },
      err=>
      {
        console.log('error');
        console.log(err);
      },
    )
  }

  resetForm(form: NgForm)
  {
    form.form.reset();
    this.service.formData = new Signup();
  }

    
    
}


