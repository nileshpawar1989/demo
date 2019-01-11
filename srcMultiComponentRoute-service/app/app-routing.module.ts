import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path:"registration", component:RegistrationComponent },
  { path:"personal-details", component:PersonalDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
