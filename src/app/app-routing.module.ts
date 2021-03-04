import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'user', component: UserComponent, canActivate: [AdminGuard]},
  {path: 'details', component: DetailsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [UserComponent, DetailsComponent]
