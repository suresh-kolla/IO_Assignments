import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddComponent } from './add/add.component';
import { MovieComponent } from './movie/movie.component';
import { ProducerComponent } from './producer/producer.component';
import { ActorComponent } from './actor/actor.component';
import { SortoPipe } from './sorto.pipe';
import { FilterPipe } from './Fliter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AddComponent,
    MovieComponent,
    ProducerComponent,
    ActorComponent,
    SortoPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
