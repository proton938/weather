import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpService} from '../models/http.service';
import { PageParams } from '../models/PageParams';
import { WeatherParams } from '../models/interfaces';
import {ApiParams} from '../models/ApiParams';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css'],
  providers: [HttpService]
})
export class PredictionComponent implements OnInit {

  weatherArray: WeatherParams;
  pageParams: PageParams;
  apiParams: ApiParams;

  constructor(private httpService: HttpService, private router: Router, page: PageParams, api: ApiParams) {
      this.pageParams = page;
      this.apiParams = api;
  }

  ngOnInit() {
      if (this.apiParams.key != '') {
          this.getWeather();
      } else {
          this.router.navigate(['']);
      }
  }

  getWeather(): void {
    this.httpService.getData()
        .subscribe(
            result => {
              console.log(result);
              this.weatherArray = result;
            }, error => {
              console.log(error);
              alert('Ресурс не обнаружен!');
              this.router.navigate(['']);
            }
        );
  }


  goToPage(dt) {
      this.pageParams.pageNumber = dt;
      this.router.navigate(['page', dt]);
  }

}
