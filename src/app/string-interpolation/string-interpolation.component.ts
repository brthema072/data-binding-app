import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  
  firstName = "John";

  age = 100;

  person = {
    firstName: "John",
    lastName: "bro",
    agr: 50,
    address: "Route 100"
  }

  constructor() { }

  ngOnInit() {
  }

}
