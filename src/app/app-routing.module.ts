import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PagerComponent} from './pager/pager.component';
import { PredictionComponent } from './prediction/prediction.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'page', component: PagerComponent},
  {path: 'page/:id', component: PagerComponent},
  {path: 'prediction', component: PredictionComponent},
  {path: 'prediction/:id', component: PredictionComponent},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
