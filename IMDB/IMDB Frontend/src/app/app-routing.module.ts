import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{MainpageComponent } from './mainpage/mainpage.component';
import { AddComponent } from './add/add.component';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { ProducerComponent } from './producer/producer.component';

const routes: Routes = [
  {
    path:'',
    component:MainpageComponent 
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'movie',
    component:MovieComponent
  },
  {
    path:'actor',
    component:ActorComponent
  },
  {
    path:'Producer',
    component:ProducerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
