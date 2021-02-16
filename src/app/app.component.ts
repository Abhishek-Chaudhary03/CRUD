
import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'MyProject';
  Formobj: Object ="";
  allUser: Object = "";
   
 
constructor(private commonService:CommonService){}
ngOnInit(){
  this.getlatestUser()
}

  addUser(Formobj : Object){
   console.log(Formobj)
   this.commonService.createUser(Formobj).subscribe((response)=>{
   this.getlatestUser();
//console.log("user has been loaded")

   })
  }
  getlatestUser(){
    this.commonService.getAlluser().subscribe((response: Object)=>{ 
        
      this.allUser = response
    })
  }
}
