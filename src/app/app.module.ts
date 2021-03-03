import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [ 
    AppComponent, UserComponent, DetailsComponent, ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
