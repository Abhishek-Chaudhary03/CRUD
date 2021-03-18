import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { AgmCoreModule } from '@agm/core';

import { CalenderComponent } from './calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
 //interactionPlugin
]);



@NgModule({
  declarations: [ 
    AppComponent, UserComponent, DetailsComponent, ErrorComponent, CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACDRwEmDYeN9brSfnyS1znONEgtqnaGgU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
