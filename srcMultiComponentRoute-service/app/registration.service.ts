import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  details:any;

  constructor() { }

  getDetails(){
    return this.details;
  }

  setDetails(details:any){
    this.details = details;
  }

}
