import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
@Input() userPost: any[] =[];
@Output() passedEvent = new EventEmitter();
  
constructor(
  private router: Router,
  route: ActivatedRoute){}

  ngOnInit() {
    // this.router.queryParams.subscribe((params)=>{
    //   console.log(params);
    // })
  }
  PassEvent(){
    this.passedEvent.emit(); 
  }
}
