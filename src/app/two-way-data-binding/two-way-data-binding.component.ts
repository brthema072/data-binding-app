import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: String = "nome1";
  name2: String = "nome2";

  client ={
    firstName: "John",
    lastName: "Mack",
    address: "route",
    age: 0
  }
  
  constructor() { }

  ngOnInit() {
  }

}
