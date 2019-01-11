import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log(this.registerForm.value);
  }


}
