import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Input('details')

 public details:any;

  constructor() { }

  ngOnInit() {
  }

}
