import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';
  Formobj : any ;

  addUser(Formobj : any){


    console.log(Formobj)
  }
}
 