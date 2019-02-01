import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-customer-complaint',
  templateUrl: './customer-complaint.component.html',
  styleUrls: ['./customer-complaint.component.css']
})
export class CustomerComplaintComponent implements OnInit {

  public complaintForm: FormGroup;

  states = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM',
          'FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA',
          'ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV',
          'NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW',
          'PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA',
          'WA','WV','WI','WY','AE','AA','AP'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.complaintForm = 
    this.fb.group({
        fName: [''],
        lName: [''],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
      address: this.fb.group({
        address1: [''],
        address2: [''],
        city: [''],
        states: [''],
        zip: [''],
      }),
      comment1 : [''],
      comment2 : ['']
    })
  }

}
