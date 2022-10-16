import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomComponent} from "./room/room.component";

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: AppComponent,
  },
  {
    path: 'room',
    
    pathMatch:'full',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[AppComponent,RoomComponent]
