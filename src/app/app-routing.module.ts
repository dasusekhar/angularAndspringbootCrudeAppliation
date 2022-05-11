import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
{path:"home",component:RegistrationComponent},
{path:"profile",component:ProfileComponent},
{path:"hr",component:HrhelpdeskComponent},
{path:"updateUser/:id",component:PayrollComponent},
{path:"search",component:SearchDeleteComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
