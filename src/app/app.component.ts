

import { CommonService } from './common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  lat: number = 13.08;
  long: number = 12.8318;

  title = 'MyProject';
  allUser: any = "";
  isEdit= false;
 public  UserObj  = {
  name:  '',
  mobile:'',
  email:'',
  password:'',
  id:''
  }; 
  
 
constructor(private commonService:CommonService, private router: Router){}
ngOnInit(){
  this.getlatestUser()
}

  addUser(Formobj : Object){
   console.log(Formobj)
   this.commonService.createUser(Formobj).subscribe((response)=>{
   this.getlatestUser();


   })
  }
  getlatestUser(){
    this.commonService.getAlluser().subscribe((response: Object)=>{ 
        
      this.allUser = response
    })
  }
  editUser(user: any ){
    this.isEdit = true;
    this.UserObj = user;
  }
  deleteUser(user :any ){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getlatestUser();
    })
  }
  updateUser(){
    this.isEdit =!this.isEdit;
    this.commonService.updateUser(this.UserObj).subscribe(()=>{
      this.getlatestUser();
    })
  }
  userEvent(){
    alert("User event has been passed");
  }
  // navigate(){
  //   this.router.navigate(['other'],(state:{example: 'data'}));
  // }
  
}
