import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {PagerComponent} from './pager/pager.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent },
  {path: 'page', component: PagerComponent},
  {path: 'page/:id', component: PagerComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
