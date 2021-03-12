import { Component, OnInit } from '@angular/core';
import { SignupService } from '../shared/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  constructor(public service: SignupService) { }

  ngOnInit(): void {
  }

}
