import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'users',
    component:UserListComponent
  },
  {
    path:'',
    redirectTo:'users',
    pathMatch:'full'
  },
  {
    path: 'Add_User',
    component:SignupComponent
  },
  {
    path:'',
    redirectTo:'Add_User',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
