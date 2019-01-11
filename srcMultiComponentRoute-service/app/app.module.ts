import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationService } from './registration.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PersonalInfoComponent,
    SubmitBtnComponent,
    PersonalDetailsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
