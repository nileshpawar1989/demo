import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm: FormGroup;

  public personalDetails:any;

  constructor(private fb: FormBuilder, private service:RegistrationService, private router:Router ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = 
    this.fb.group({
        personal :this.fb.group({first_name: '',
        last_name: '',
        email: ['', [Validators.required, Validators.email]],
        }),
      address: this.fb.group({
        address: '',
        city: '',
        state: '',
        zip: '',
      }),
      password: '',
      passwordConfirmation: ''
    })
  }

  onSubmit() {
    // do something with the values
    //this.personalDetails =  this.registerForm.value;
    this.service.setDetails(this.registerForm.value);
    this.router.navigate(['/personal-details']);
  }

}
