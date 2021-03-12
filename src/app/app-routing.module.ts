import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../app/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent} from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { NoAccessComponent } from './no-access/no-access.component';


const routes: Routes = [
  {path:'signup', component: SignupComponent},
  {path:'admin', component: UserDetailsComponent},
  {path:'users', component: UsersComponent},
  {path:'userAccount', component: UserAccountComponent},
  {path:'', component: LoginComponent},
  {path:'denied', component: NoAccessComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
