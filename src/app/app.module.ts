import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'materialize-css';
// import { MaterializeModule } from 'angular2-materialize';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // MaterializeModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
