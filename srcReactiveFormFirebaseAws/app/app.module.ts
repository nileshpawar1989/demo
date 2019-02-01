import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCComplaintComponent } from './customer-c-complaint/customer-c-complaint.component';
import { CustomerComplaintComponent } from './customer-complaint/customer-complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCComplaintComponent,
    CustomerComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
