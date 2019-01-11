import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.css']
})
export class SubmitBtnComponent implements OnInit {

  @Input('form')

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
