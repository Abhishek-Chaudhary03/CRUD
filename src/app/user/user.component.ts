import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  
constructor(
  private router: Router,
  route: ActivatedRoute){}

  ngOnInit() {
    // this.router.queryParams.subscribe((params)=>{
    //   console.log(params);
    // })
  }
}