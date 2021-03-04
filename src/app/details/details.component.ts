import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }
logInUser(){
  if(this.email == "admin@gmail.com" && this.password == "12345"){
    console.log("welcome to dashboard");
  }
  else
  {
    console.log("User Unauthorised");
  }
}
}
