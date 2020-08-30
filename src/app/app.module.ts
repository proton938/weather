import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagerComponent } from './pager/pager.component';
import { PredictionComponent } from './prediction/prediction.component';
import { HomeComponent } from './home/home.component';

import { PageParams } from './models/PageParams';
import { ApiParams } from './models/ApiParams';

@NgModule({
  declarations: [
    AppComponent,
    PagerComponent,
    PredictionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [ PageParams, ApiParams ],
  bootstrap: [AppComponent]
})

export class AppModule { }
